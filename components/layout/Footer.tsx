import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 mt-auto bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="text-gray-500 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Бренд. Все права защищены.
        </p>
        <nav className="flex space-x-4">
          <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors duration-150">
            Конфиденциальность
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors duration-150">
            Условия
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-primary transition-colors duration-150">
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  )
}
