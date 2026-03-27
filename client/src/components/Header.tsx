/**
 * Componente Header - Navegação principal
 * Design: Minimalismo Moderno
 * - Navegação horizontal limpa
 * - Logo/Nome à esquerda
 * - Links de navegação à direita
 * - Hover effects elegantes com underline
 */

import { Link } from 'wouter';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container flex items-center justify-between py-6">
        {/* Logo/Nome */}
        <Link href="/">
          <a className="text-2xl font-bold text-black hover:text-blue-600 transition-colors duration-300">
            Portfólio
          </a>
        </Link>

        {/* Links de Navegação */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
