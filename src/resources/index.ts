import { Locale, LocaleJSON, Namespace } from '../types'
import * as EN from './en'
import * as RU from './ru'

const locales: Record<Locale, Record<Namespace, LocaleJSON>> = {
  [Locale.EN]: EN,
  [Locale.RU]: RU,
}

export const getResource = (locale: Locale, ns: Namespace): LocaleJSON => {
  return locales[locale][ns]
}
