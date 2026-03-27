/**
 * Componente ProjectCard - Card individual de projeto
 * Design: Minimalismo Moderno
 * - Cards simples com sombra suave
 * - Hover effect com elevação
 * - Imagem do projeto
 * - Título, descrição e tags
 */

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Imagem do Projeto */}
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
