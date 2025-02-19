import { Metadata } from 'next'

const siteConfig = {
  name: 'WhatsApp AI Агент',
  description: 'Автоматизируйте общение с клиентами в WhatsApp с помощью искусственного интеллекта. Повысьте эффективность вашего бизнеса.',
  url: 'https://whatsapp-agent.com',
  ogImage: 'https://whatsapp-agent.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/whatsappagent',
    github: 'https://github.com/whatsappagent',
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'WhatsApp',
    'AI',
    'чат-бот',
    'автоматизация',
    'бизнес',
    'искусственный интеллект',
    'клиентский сервис',
    'мессенджер',
    'коммуникация',
  ],
  authors: [
    {
      name: 'WhatsApp AI Агент',
      url: siteConfig.url,
    },
  ],
  creator: 'WhatsApp AI Агент',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@whatsappagent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
} 