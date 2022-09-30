import { Controller, Get, Param } from '@nestjs/common'

import { LocaleJSON, Locales } from './types'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:locale')
  getResourse(@Param('locale') locale: Locales): LocaleJSON {
    return this.appService.getLocaleJSON(locale)
  }
}
