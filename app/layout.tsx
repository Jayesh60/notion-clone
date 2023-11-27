import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion-Clone',
  description: 'Welcome to NotionHub – Your Ultimate Destination for Seamless Productivity and Collaboration! Unlock the power of organization with Notion, your all-in-one workspace for note-taking, project management, and team collaboration. Our SEO-friendly website is designed to enhance your digital experience and boost productivity effortlessly.',
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme : light)",
        url: "/logo.svg",
        href:"/logo.svg"
      },
      {
        media: "(prefers-color-scheme : dark)",
        url: "/logo-dark.svg",
        href:"/logo-dark.svg"
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
