import { Locales, LocaleJSON } from '../types'
import * as EN from './en'
import * as RU from './ru'

const locales: Record<Locales, LocaleJSON> = {
  en: EN,
  ru: RU,
}

export const getResource = (locale: Locales): LocaleJSON => {
  return locales[locale]
}
