import { data } from "public/data/aboutme";

export const projects = [
    {
        id: 1,
        title: "📚 Ebook Store Frontend",
        description:
            "A modern, SEO-optimized frontend for an eBook store built using Next.js and React. This application enables users to browse, search, and preview eBooks with a clean and responsive interface.",
        image: "/projects/project1.jpg",
        tags: ["Next.js", "React", "Redux Toolkit", "Styled Components", "React Icons", "Vercel"],
        demoUrl: "https://ebook-store-navy.vercel.app",
        codeUrl: "https://github.com/ashishyadavcs/ebook-store-frontend",
        slug: "ebook-store",
        content: `
      <h1>📚 Ebook Store Frontend</h1>

      <p>A modern, SEO-optimized frontend for an eBook store built using Next.js and React. This application enables users to browse, search, and preview eBooks with a clean and responsive interface.</p>
      
      <p><strong>🔗 Live Demo:</strong> <a href="https://ebook-store-navy.vercel.app" target="_blank">ebook-store-navy.vercel.app</a></p>
      
      <h2>🚀 Features</h2>
      
      <ul>
        <li>🔍 Search for books by title</li>
        <li>📘 View detailed book pages</li>
        <li>🎯 Responsive design for all screen sizes</li>
        <li>⚡ Fast performance with Next.js static generation and routing</li>
        <li>🔒 Protected routes for authenticated users</li>
        <li>🎨 Clean, semantic HTML/CSS layout</li>
        <li>🧠 SEO optimized for search engine visibility</li>
      </ul>
      
      <h2>🛠️ Technology Stack</h2>
      
      <ul>
        <li><strong>Framework:</strong> Next.js</li>
        <li><strong>Library:</strong> React</li>
        <li><strong>Routing & SSR:</strong> Next.js App Router</li>
        <li><strong>State Management:</strong> Redux Toolkit</li>
        <li><strong>Styling:</strong> Vanilla CSS, Styled Components</li>
        <li><strong>Icons:</strong> React Icons</li>
        <li><strong>Deployment:</strong> Vercel</li>
      </ul>
      
      <h2>📂 Project Structure</h2>
      
      <p>The project follows a clean and organized structure with reusable components, utility functions, and proper separation of concerns for maintainable code.</p>
    `,
    },
    {
        id: 2,
        title: "Wedding Photography website",
        description:
            "a beautifully designed wedding photography website that showcases elegant portfolios, client galleries, and photography packages. It emphasizes a luxurious and emotional user experience — helping couples explore, book, and connect with professional photographers seamlessly",
        image: "/projects/birdlens.png",
        tags: ["Next.js", "Prismic", "CMS", "React"],
        demoUrl: "https://www.birdlenscreation.com/",
        slug: "wedding-photography-website",
        content: `
      <h1>Wedding Photography Website</h1>

      <p>A beautifully designed wedding photography website that showcases elegant portfolios, client galleries, and photography packages. It emphasizes a luxurious and emotional user experience — helping couples explore, book, and connect with professional photographers seamlessly.</p>

      <h2>Features</h2>
      
      <ul>
        <li>Create, assign, and track tasks</li>
        <li>Real-time collaboration</li>
        <li>Project organization and tagging</li>
        <li>Due dates and reminders</li>
        <li>Progress analytics and reporting</li>
        <li>File attachments and comments</li>
      </ul>
      
      <h2>Technology Stack</h2>
      
      <ul>
        <li><strong>Frontend</strong>: Next.js, React</li>

        <li><strong>Deployment</strong>: Vercel</li>
      </ul>
    `,
    },
    {
        id: 4,
        title: "Portfolio Website",
        description:
            "A responsive portfolio website showcasing projects and skills with modern design and animations.",
        image: "/projects/portfolio.png",
        tags: ["Next.js", "Styled Components", "Framer Motion", "React"],
        demoUrl: "https://ashishyadavcs.vercel.app",
        codeUrl: "https://github.com/ashishyadavcs/ebook-store-frontend",
        slug: "portfolio-website",
        content: `
      <h1>Portfolio Website</h1>

      <p>A modern and responsive portfolio website with sleek animations.</p>
      
      <h2>Features</h2>
      
      <ul>
        <li>Responsive design for all devices</li>
        <li>Smooth page transitions and animations</li>
        <li>Dark/light theme toggle</li>
        <li>Project showcase with detailed pages</li>
        <li>Contact form with validation</li>
        <li>SEO optimized</li>
      </ul>
      
      <h2>Technology Stack</h2>
      
      <ul>
        <li><strong>Framework</strong>: Next.js</li>
        <li><strong>Styling</strong>: Styled Components</li>
        <li><strong>Animations</strong>: Framer Motion</li>
        <li><strong>Deployment</strong>: Vercel</li>
        <li><strong>Forms</strong>: React Hook Form</li>
        <li><strong>Validation</strong>: Yup</li>
      </ul>
    `,
    },
];
