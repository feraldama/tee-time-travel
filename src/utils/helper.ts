export const encryptPassword = (password: string): string => {
  const JSEncrypt = require('node-jsencrypt')

  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvod5N4ogaG3rpSemZl3l2M+qgIpVOG+I5Qb9E4TM6ghkQ4cINmk/aTBKKnwVKAjMZ7Fc1PrmgH3YaG1oxT80owuGcSoDesQCWLX1MZpQEy9EfXUiB4YoQCJ9ux8nrGk9pBUN6hCET0u+3oAlVQCJFfLFA6/y02FpMilWtY7Y/AsKVhn9hgIwNWEDBlNmeChZOxN4Yh0AmljLlCGEUfi2Sd324pWzjxM2e6LjtxlfiuzUomywiismM66ChmYhEq7++jwkkbvtxcnYaZhDOB5S8md6rdAeis9EMnRPqp110ViqNzgSrh5Q3FxQNoMvDEchM4pLy5cD/yBoOI5vKSfYKul+KAr3HQD355dd0do0vmCp8MfdgQVZd06kR5d0kDMPxBkADokLmvEWmjm30RuIhdW5xttvZXJtt3TUN/TbhYQEKlprPXgS8TYZ8X8KNjMeJi+kkh+eDnkcRjoHkDekMy0Vltrs6LjC8xrjgDiCCtF7SEz1uJLgHVGy1Tn9hV9JjZUZ06NBMUcC5WQTgB8bVewPgP6Ss+ml8KcQd6W1FyoTJAezvGFLTz8qbP7OrKOzuiqQT0ABvB+RWFu1x4/x05gY2cPiC+aYxMODtkwgE5l7JlZ2o0U8bowuD+lX/eZ3+0UfumgICIAPffVmhJnSUWW/ImH5f73MnJxI4dQ08uUCAwEAAQ==
  -----END PUBLIC KEY-----`

  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)

  const encryptedPassword = encryptor.encrypt(password)

  console.log('Encrypted Password:', encryptedPassword)
  return encryptedPassword
}
