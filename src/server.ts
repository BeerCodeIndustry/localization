import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function server() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule, { cors: true })

  const config = new DocumentBuilder()
    .setTitle('localization')
    .setDescription('Documentation')
    .setVersion('1.0.0')
    .build()
  const documentation = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/docs', app, documentation)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

server()
