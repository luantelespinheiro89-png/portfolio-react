# Portfólio React

Um portfólio profissional moderno desenvolvido com **React 19**, **Tailwind CSS 4** e **TypeScript**, seguindo princípios de design minimalista e componentização.

## 🎯 Características

- **Componentização React**: Componentes reutilizáveis bem estruturados (Header, ProjectCard, Projects)
- **Renderização Dinâmica**: Array de projetos renderizado dinamicamente com dados estáticos
- **Design Minimalista Moderno**: Paleta limpa (branco, preto, azul vibrante) com tipografia intencional
- **Responsivo**: Layout adaptável para mobile, tablet e desktop
- **Tipografia Sofisticada**: Poppins para títulos + Inter para corpo
- **Interações Elegantes**: Transições suaves e hover effects refinados
- **Acessibilidade**: Semântica HTML apropriada e navegação clara

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Icons**: Lucide React

## 📁 Estrutura do Projeto

```
portfolio-react/
├── client/
│   ├── public/              # Arquivos estáticos (favicon, manifest)
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Header.tsx   # Navegação principal
│   │   │   ├── ProjectCard.tsx  # Card individual de projeto
│   │   │   └── Projects.tsx     # Seção com renderização dinâmica
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx     # Página principal
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais e tokens de design
│   └── index.html           # Template HTML
├── server/                  # Servidor Express (compatibilidade)
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ ou pnpm 10+

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Compilar para produção
pnpm build

# Preview da build de produção
pnpm preview
```

O servidor estará disponível em `http://localhost:3000`

## 📊 Componentes Principais

### Header
Navegação horizontal com links e hover effects elegantes. Inclui logo/nome à esquerda e links de navegação à direita.

### ProjectCard
Card reutilizável que exibe:
- Imagem do projeto
- Título e descrição
- Tags de tecnologias
- Link para o projeto
- Hover effects com elevação

### Projects
Seção que renderiza dinamicamente um array de projetos em grid responsivo (1-3 colunas conforme o breakpoint).

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Branco | #FFFFFF | Fundo principal |
| Preto | #1A1A1A | Texto primário |
| Azul | #0066FF | Acento, links, botões |
| Cinza | #F9F9F9 | Fundos secundários |

### Tipografia

- **Display**: Poppins Bold 48px
- **Heading**: Poppins SemiBold 32px
- **Body**: Inter Regular 16px
- **Caption**: Inter Regular 14px

### Espaçamento

- Espaço generoso entre seções (80-120px)
- Padding interno consistente (24-32px)
- Gap entre elementos (16-24px)

## 🔄 Renderização Dinâmica de Projetos

Os projetos são armazenados em um array de objetos no componente `Projects.tsx`:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  // ... 6 projetos de exemplo
];
```

Para adicionar novos projetos, basta adicionar objetos ao array. Cada projeto será renderizado automaticamente como um `ProjectCard`.

## 📱 Responsividade

- **Mobile**: 1 coluna (< 768px)
- **Tablet**: 2 colunas (768px - 1024px)
- **Desktop**: 3 colunas (> 1024px)

## 🔗 Seções da Página

1. **Header**: Navegação fixa no topo
2. **Hero**: Chamada principal com CTA
3. **Sobre**: Descrição profissional
4. **Projetos**: Grid de projetos com renderização dinâmica
5. **Contato**: Links sociais e CTA
6. **Footer**: Informações de copyright

## 🎯 Próximos Passos

- Adicionar mais projetos ao array
- Conectar a um backend para dados dinâmicos
- Implementar formulário de contato funcional
- Adicionar dark mode
- Implementar analytics
- Otimizar imagens e performance

## 📄 Licença

MIT

## 👤 Autor

Desenvolvido como portfólio profissional em React.

---

**Desenvolvido com React + Tailwind CSS + TypeScript**
