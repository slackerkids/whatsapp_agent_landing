import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between animate-fade-in">
        <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-105">
          <svg
            className="w-8 h-8 text-primary transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xl font-bold text-gray-900 transition-colors duration-300">WhatsApp AI</span>
        </Link>
        <a
          href="https://wa.me/77079837010?text=Здравствуйте!%20Пишу%20вам%20с%20вебсайта%20насчет%20подключения%20ии"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Подключить
        </a>
      </div>
    </header>
  )
}

