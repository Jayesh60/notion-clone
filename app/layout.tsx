import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/provider/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion-Clone',
  description: 'Welcome to Notionclone – Your Ultimate Destination for Seamless Productivity and Collaboration! Unlock the power of organization with Notion, your all-in-one workspace for note-taking, project management, and team collaboration. Our SEO-friendly website is designed to enhance your digital experience and boost productivity effortlessly.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme : light)",
        url: "/logo.png",
        href: "/logo.png"
      },
      {
        media: "(prefers-color-scheme : dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png"
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='jayesh-theme-2'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
