# Tuiu Remesas

Envía dinero a Paraguay fácilmente

## Commandos

**Warnings**
El uso de este paquete requería `PNPM` (requisito), puede instalarlo usando `npn i -g pnpm` y luego seguir las instrucciones.

[Lisrta de Comandos](./docs/commands.md)

## Env Variable

Las variables env se almacenan en `.env` en la carpeta raíz (debe crearlas usted mismo)

```env
BASEPATH=
NEXT_PUBLIC_API_URL=http://localhost:3000
PORT=3000
# API configuration
BASE_URL_PORTAL=url_api
# AWS S3 configuration
AWS_ACCESS_KEY_ID=SDFGSFGDFGDFGDFGDFG
AWS_SECRET_ACCESS_KEY=dsfsdfsdfsdgertgrtgergtrtgr
AWS_REGION=us-east-1
AWS_BUCKET_NAME=development-s3
# Sentry configuration dev
SENTRY_AUTH_TOKEN=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
NEXT_PUBLIC_SENTRY_DSN=https://40758c81c2f14c18b3ed324b363bc274@o4507266281373696.ingest.us.sentry.io/4507266283143168
# Firebase configuration
FIREBASE_MEASUREMENT_ID=G-XXXXXXXX
# Variables de entorno para la configuración de la autenticación de Access Control
AUTH_URL_ACCESS_CONTROL=http://18.230.23.171:8080/identity/v1
AUTH_CLIENT_ID=client-facetec
AUTH_CLIENT_SECRET=4c6b3a730c9c498dae81272081a72710
AUTH_APLICATION_ID=BNF
AUTH_VERSION=1.0.0

NEXTAUTH_SECRET=example-token
# Variables de entorno para la configuración de la autenticación de Github
AUTH_GITHUB_ID=Iv1.0.0
AUTH_GITHUB_SECRET=Iv1.0.0
```
