"use client"
import localFont from "next/font/local";
import "./globals.css";
import Menu from '@/app/component/Menu'
import UserProvider from './contexts/UserProvider'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <body >
        <UserProvider>
          {pathName != "/login" ? <Menu /> : null}
          {children}
        </UserProvider>

      </body>
    </html>
  );
}
