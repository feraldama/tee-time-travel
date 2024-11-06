export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Time Tee Travel - Agencia de Viajes de Golf',
  description: 'Agencia de Viajes de Golf',
  lang: 'es',
  navItems: [
    {
      label: 'Inicio',
      href: '/'
    },
    {
      label: 'Tabs',
      href: '/pages/tabs'
    }
  ],
  links: {
    github: 'https://github.com/feraldama/tee-time-travel.git'
  }
}
