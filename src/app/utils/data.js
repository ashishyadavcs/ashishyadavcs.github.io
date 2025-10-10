import { data } from "public/data/aboutme";

export const projects = [
    {
        id: 1,
        title: "Ebook Store",
        description:
            "A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
        image: "/projects/project1.jpg",
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe", "Razorpay"],
        demoUrl: "https://ebook-store-navy.vercel.app",
        codeUrl: `${data.contacts.github}/Ebook-Store`,
        slug: "ebook-store",
        content: `
      <h1>Ebook Store</h1>

      <p>A comprehensive e-commerce solution built with modern technologies.</p>
      
      <h2>Features</h2>
      
      <ul>
        <li>User authentication and profiles</li>
        <li>Product catalog with search and filtering</li>
        <li>Shopping cart and wishlist functionality</li>
        <li>Secure checkout with Stripe</li>
        <li>Order tracking and history</li>
        <li>Admin dashboard for product and order management</li>
      </ul>
      
      <h2>Technology Stack</h2>
      
      <ul>
        <li><strong>Frontend</strong>: React, Redux, Styled Components</li>
        <li><strong>Backend</strong>: Node.js, Express</li>
        <li><strong>Database</strong>: MongoDB</li>
        <li><strong>Authentication</strong>: JWT</li>
      - **Payments**: Stripe API
      - **Deployment**: AWS
    `,
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
        image: "/projects/project2.jpg",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        demoUrl: "https://example.com/project2",
        codeUrl: "https://github.com/username/project2",
        slug: "task-management-app",
        content: `
      <h1>Task Management App</h1>

      <p>A modern task management solution for teams and individuals.</p>
      
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
        <li><strong>Frontend</strong>: Vue.js, Vuex</li>
        <li><strong>Backend</strong>: Firebase</li>
        <li><strong>Styling</strong>: Tailwind CSS</li>
        <li><strong>Real-time Database</strong>: Firestore</li>
        <li><strong>Authentication</strong>: Firebase Auth</li>
        <li><strong>Storage</strong>: Firebase Storage</li>
      </ul>
    `,
    },
    {
        id: 3,
        title: "Fitness Tracking Platform",
        description:
            "A fitness tracking platform allowing users to monitor workouts, set goals, and track progress over time.",
        image: "/projects/project3.jpg",
        tags: ["React Native", "GraphQL", "AWS", "TypeScript"],
        demoUrl: "https://example.com/project3",
        codeUrl: "https://github.com/username/project3",
        slug: "fitness-tracking-platform",
        content: `
      <h1>Fitness Tracking Platform</h1>

      <p>A comprehensive fitness tracking solution for health enthusiasts.</p>
      
      <h2>Features</h2>
      
      <ul>
        <li>Workout planning and tracking</li>
        <li>Goal setting and progress visualization</li>
        <li>Nutrition tracking and meal plans</li>
        <li>Integration with fitness wearables</li>
        <li>Social sharing and community features</li>
        <li>Personalized recommendations</li>
      </ul>
      
      <h2>Technology Stack</h2>
      
      <ul>
        <li><strong>Mobile App</strong>: React Native, TypeScript</li>
        <li><strong>Backend</strong>: Node.js, GraphQL</li>
        <li><strong>Database</strong>: PostgreSQL</li>
        <li><strong>Cloud Services</strong>: AWS</li>
        <li><strong>Authentication</strong>: Auth0</li>
        <li><strong>Analytics</strong>: Custom dashboards with D3.js</li>
      </ul>
    `,
    },
    {
        id: 4,
        title: "Portfolio Website",
        description:
            "A responsive portfolio website showcasing projects and skills with modern design and animations.",
        image: "/projects/project4.jpg",
        tags: ["Next.js", "Styled Components", "Framer Motion"],
        demoUrl: "https://example.com/project4",
        codeUrl: "https://github.com/username/project4",
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
