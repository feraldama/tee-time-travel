import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { Readable } from 'stream'

export async function GET(request: Request, { params }: { params: { nro: string; file: string } }) {
  const { nro, file } = params

  const client = new S3Client({ region: process.env.AWS_REGION })
  try {
    const getObjectParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${nro}/${file}`
    }

    const command = new GetObjectCommand(getObjectParams)

    const response = await client.send(command)

    if (response.Body) {
      const stream = response.Body as Readable

      const buffer = await streamToBuffer(stream)

      const headers = { 'Content-Type': response.ContentType ? response.ContentType : 'application/octet-stream' }

      return new Response(buffer, { headers })
    } else {
      return new Response('Objeto no encontrado', { status: 404 })
    }
  } catch (error) {
    console.error('Error al descargar el objeto desde S3:', error)

    return new Response('Error al descargar el objeto desde S3', { status: 500 })
  }
}

async function streamToBuffer(stream: Readable): Promise<ArrayBuffer> {
  const chunks: Uint8Array[] = []
  for await (const chunk of stream) {
    chunks.push(chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk))
  }
  return Buffer.concat(chunks).buffer
}
