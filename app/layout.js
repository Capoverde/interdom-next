import { Inter } from 'next/font/google'
import './styles/main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interdom s.c.',
  description: 'Interdom s.c. Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
