/**
 * Página Home - Portfólio Principal
 * Design: Minimalismo Moderno
 * - Seção hero com tipografia grande
 * - Seção sobre
 * - Seção de projetos (renderização dinâmica)
 * - Footer com links sociais
 */

import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navegação */}
      <Header />

      {/* Seção Hero */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-black mb-6 leading-tight">
              Desenvolvedor Full Stack & Designer
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criando experiências digitais incríveis através de código limpo,
              design intencional e atenção aos detalhes. Especializado em React,
              Node.js e desenvolvimento web moderno.
            </p>
            <div className="flex gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Ver Projetos
                <ArrowRight size={20} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-black mb-6">Sobre Mim</h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por criar soluções web que
                combinam funcionalidade com design excepcional. Com mais de 5
                anos de experiência, tenho trabalhado em projetos de diferentes
                escalas, desde startups até grandes empresas.
              </p>
              <p>
                Minha expertise abrange desenvolvimento frontend com React,
                backend com Node.js, e design de interfaces modernas. Acredito
                que a melhor tecnologia é aquela que resolve problemas reais de
                forma elegante e intuitiva.
              </p>
              <p>
                Quando não estou codificando, você pode me encontrar
                contribuindo para projetos open source, escrevendo sobre
                desenvolvimento web ou explorando novas tecnologias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos (Componente com Renderização Dinâmica) */}
      <Projects />

      {/* Seção de Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-black mb-6">Vamos Conversar</h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 text-lg mb-12">
              Tenho interesse em oportunidades de trabalho, projetos freelance
              ou apenas conversar sobre desenvolvimento web. Sinta-se à vontade
              para entrar em contato!
            </p>

            {/* Links Sociais */}
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:seu.email@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-gray-800">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              © 2024 Portfólio. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Desenvolvido com React + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
