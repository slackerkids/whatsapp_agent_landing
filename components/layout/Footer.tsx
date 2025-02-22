import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 mt-auto bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="text-gray-500 mb-4 sm:mb-0">
          © {new Date().getFullYear()} WhatsApp AI.
        </p>
      </div>
    </footer>
  )
}
