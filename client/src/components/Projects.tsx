/**
 * Componente Projects - Seção de projetos com renderização dinâmica
 * Design: Minimalismo Moderno
 * - Grid de projetos (2-3 colunas)
 * - Array de objetos renderizado dinamicamente
 * - Espaço generoso entre elementos
 */

import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Array de projetos - dados estáticos para renderização dinâmica
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com React, Node.js e MongoDB. Inclui autenticação, carrinho de compras e integração com pagamento.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicação de gerenciamento de tarefas com React e Firebase. Suporta colaboração em tempo real e sincronização entre dispositivos.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time'],
    link: 'https://github.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard de previsão do tempo com React e API OpenWeather. Interface intuitiva com gráficos e previsões detalhadas.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
    tags: ['React', 'API REST', 'Charts', 'Responsive'],
    link: 'https://github.com',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Ferramenta de análise de redes sociais com dashboard interativo. Visualiza métricas em tempo real e gera relatórios.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'Plataforma de blog moderna com editor de markdown, comentários e sistema de categorias. Otimizada para SEO.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    tags: ['Next.js', 'Markdown', 'SEO', 'Vercel'],
    link: 'https://github.com',
  },
  {
    id: '6',
    title: 'Design System',
    description: 'Sistema de design completo com componentes reutilizáveis, documentação e Storybook. Segue princípios de acessibilidade.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: ['React', 'Storybook', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container">
        {/* Título da Seção */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Meus Projetos
          </h2>
          <div className="w-16 h-1 bg-blue-600"></div>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Aqui estão alguns dos meus projetos mais recentes. Cada um representa
            uma oportunidade de aprendizado e aplicação de melhores práticas em
            desenvolvimento web.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
