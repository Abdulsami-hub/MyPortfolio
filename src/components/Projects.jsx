import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Code2, Database, Palette } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'InsightDeed.com',
      description: 'A comprehensive job portal with intelligent matching system, built with Laravel API backend and React frontend. Features include job search, candidate matching, and employer dashboard.',
      image: '/insightdeed.jpg',
      technologies: ['Laravel API', 'React.js', 'MySQL', 'Tailwind CSS', 'Inertia.js'],
      category: 'Full-Stack',
      icon: Globe,
      liveUrl: 'https://insightdeed.com',
      githubUrl: 'https://github.com',
      features: ['Job Matching Algorithm', 'Real-time Notifications', 'Admin Dashboard', 'Responsive Design']
    },
    {
      title: 'qrcode.miatc.af',
      description: 'Custom QR code generation and management system with tracking capabilities. Built for businesses to manage and monitor QR code usage across different campaigns.',
      image: '/qrcode.JPG',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'QR API'],
      category: 'Backend',
      icon: Code2,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      features: ['Custom QR Generation', 'Usage Analytics', 'Campaign Management', 'Export Functionality']
    },
    {
      title: 'Tax Management System',
      description: 'Secure and dynamic tax reporting system with advanced calculations and reporting features. Designed for financial institutions and accounting firms.',
      image: '/tax.JPG',
      technologies: ['Laravel', 'PHP', 'SQL Server', 'Vue.js', 'Tailwind CSS'],
      category: 'Full-Stack',
      icon: Database,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      features: ['Tax Calculations', 'Report Generation', 'User Management', 'Data Security']
    },
    {
      title: 'Web Hosting Website',
      description: 'Modern e-commerce solution with payment integration, inventory management, and customer analytics. Built with modern web technologies for optimal performance.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
      category: 'Full-Stack',
      icon: Globe,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      features: ['Payment Processing', 'Inventory Management', 'Customer Analytics', 'Mobile App']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing skills, projects, and professional experience. Built with modern design principles and smooth animations.',
      image: '/background.PNG',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Responsive Design'],
      category: 'Frontend',
      icon: Palette,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      features: ['Modern UI/UX', 'Smooth Animations', 'Dark/Light Mode', 'SEO Optimized']
    },
    {
      title: 'API Management System',
      description: 'Comprehensive API management platform with authentication, rate limiting, and analytics. Designed for developers and businesses to manage their API ecosystem.',
      image: '/api/placeholder/600/400',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'JWT Authentication'],
      category: 'Backend',
      icon: Code2,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      features: ['API Authentication', 'Rate Limiting', 'Usage Analytics', 'Documentation']
    }
  ]

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend']

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent-950 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-electric/20 to-accent-950/20 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-electric/50" />
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-electric text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex space-x-2">
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={feature} className="text-xs text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-electric rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

