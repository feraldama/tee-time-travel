import { useTranslations as base_useTranslations } from 'next-intl'

export const useTranslation: typeof base_useTranslations = namespace => {
  return base_useTranslations(namespace)
}
