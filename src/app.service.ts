import { Injectable, HttpException, HttpStatus } from '@nestjs/common'

import { LocaleJSON, Locale, Namespace } from './types'
import { getResource } from './resources'

@Injectable()
export class AppService {
  getLocaleJSON(locale: Locale, ns: Namespace): LocaleJSON {
    const resource = getResource(locale, ns)

    if (!resource) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `The localization data does not exist for resource ${locale}`,
        },
        HttpStatus.NOT_FOUND,
      )
    }

    return resource
  }
}
