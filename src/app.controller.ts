import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { LocaleJSON, Locale, Namespace } from './types'
import { AppService } from './app.service'

@ApiTags('App Controller')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Get all namespaces' })
  @ApiResponse({ status: 200, type: [String] })
  @Get('/namespaces')
  getNamespaces(): Namespace[] {
    return Object.values(Namespace)
  }

  @ApiOperation({ summary: 'Get all locales' })
  @ApiResponse({ status: 200, type: [String] })
  @Get('/locales')
  getLocales(): string[] {
    return Object.values(Locale)
  }

  @ApiOperation({ summary: 'Get resource' })
  @ApiResponse({ status: 200 })
  @Get('/:locale/:namespace')
  getResourse(
    @Param('locale') locale: Locale,
    @Param('namespace') ns: Namespace,
  ): LocaleJSON {
    return this.appService.getLocaleJSON(locale, ns)
  }
}
