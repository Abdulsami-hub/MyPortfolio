import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'Home', href: '#home' },
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Experience', href: '#experience' },
          { name: 'Education', href: '#education' },
          { name: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Web Development', href: '#services' },
          { name: 'Mobile Apps', href: '#services' },
          { name: 'API Development', href: '#services' },
          { name: 'Database Design', href: '#services' },
          { name: 'UI/UX Design', href: '#services' },
          { name: 'Consulting', href: '#services' }
        ]
      },
      {
        title: 'Technologies',
        links: [
          { name: 'React.js', href: '#skills' },
          { name: 'Laravel', href: '#skills' },
          { name: 'PHP', href: '#skills' },
          { name: 'MySQL', href: '#skills' },
          { name: 'Tailwind CSS', href: '#skills' },
          { name: 'Git & GitHub', href: '#skills' }
        ]
      }
    ],
    social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:bg-gray-800' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-600' },
      { name: 'Upwork', icon: ExternalLink, href: 'https://upwork.com', color: 'hover:bg-green-500' }
    ]
  }

  return (
    <footer className="bg-gray-900 dark:bg-navy text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
                <div className="relative">
                  <Code2 className="w-8 h-8 text-electric" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-950 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Abdul Sami</h3>
                  <p className="text-sm text-electric font-mono">Fazilyar</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-center sm:text-left">
                Full-Stack Developer passionate about creating scalable, elegant, and high-performing web solutions.
              </p>
              
              <div className="flex justify-center sm:justify-start space-x-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-gray-800 text-gray-300 transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4 text-center sm:text-left"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-electric transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated with My Work
            </h4>
            <p className="text-gray-400 mb-6 max-w-md mx-auto px-4">
              Get notified about new projects, tech insights, and development tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-electric to-accent-950 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Abdul Sami Fazilyar. All rights reserved.</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-electric transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-electric transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-electric transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 text-sm">
              <span>Made with</span>&nbsp;
              Abdul sami
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-electric to-accent-950 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer

