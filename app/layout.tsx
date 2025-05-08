import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'RSM Academy Landing',
  description: 'RSM Academy Landing Page',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32' },
      { url: '/favicon.png', sizes: '64x64' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="64x64" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
