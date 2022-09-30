import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

import { LocaleJSON, Locales } from './types'
import { getResource } from './resources'

@Injectable()
export class AppService {
  getLocaleJSON(locale: Locales): LocaleJSON {
    const resource = getResource(locale)

    if (!resource) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `The localization data does not exist for resource ${locale}`,
        },
        HttpStatus.NOT_FOUND,
      )
    }

    return getResource(locale)
  }
}
