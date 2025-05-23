import './globals.css'

export const metadata = {
  title: 'samir',
  description: 'Welcome to my professional portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
            <h1 className="text-xl font-bold">samir </h1>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/projects" className="hover:text-blue-600">Projects</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}