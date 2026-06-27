import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getPortfolioDetail } from '@/lib/detail'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'Ishita Tiwari — AI & Full-Stack Engineer',
  description: 'Personal portfolio of Ishita Tiwari, an AI and full-stack engineer building intelligent systems and web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const detail = getPortfolioDetail()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer name={detail?.name} social={detail?.social} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
