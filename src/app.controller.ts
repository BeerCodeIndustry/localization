import { Controller, Get, Param } from '@nestjs/common'

import { LocaleJSON, Locale, Namespace } from './types'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/namespaces')
  getNamespaces(): string[] {
    return Object.values(Namespace)
  }

  @Get('/locales')
  getLocales(): string[] {
    return Object.values(Locale)
  }

  @Get('/:locale/:namespace')
  getResourse(
    @Param('locale') locale: Locale,
    @Param('namespace') ns: Namespace,
  ): LocaleJSON {
    return this.appService.getLocaleJSON(locale, ns)
  }
}
