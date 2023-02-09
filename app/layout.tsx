import "../styles/globals.css"
import Header from "./Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100 dark:bg-zinc-800 transition-all duration-75">
        <Header />
        <div className="max-w-6xl mx-auto">
          {children}
        </div> 
      </body>
    </html>
  )
}