import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: ExternalLink, href: 'https://upwork.com', label: 'Upwork' },
  ]

  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-electric font-mono text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Abdul Sami{' '}
                <span className="gradient-text">Fazilyar</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Full-Stack Developer
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              Crafting scalable, elegant, and high-performing web solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center space-x-2">
                <span>Hire Me</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/Abdulsami_CV.pdf" 
                download
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-electric hover:text-electric transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-electric/20 hover:border-electric transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-electric" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Circle */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Background Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-electric/30"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ float: 6 }}
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-electric to-accent-950 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">React</span>
              </motion.div>
              
              <motion.div
                animate={{ float: 6 }}
                transition={{ delay: 1 }}
                className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-accent-950 to-electric rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">Laravel</span>
              </motion.div>
              
              <motion.div
                animate={{ float: 6 }}
                transition={{ delay: 2 }}
                className="absolute bottom-20 left-16 w-16 h-16 bg-gradient-to-br from-electric to-accent-950 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">PHP</span>
              </motion.div>
              
              <motion.div
                animate={{ float: 6 }}
                transition={{ delay: 3 }}
                className="absolute bottom-10 right-20 w-16 h-16 bg-gradient-to-br from-accent-950 to-electric rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">MySQL</span>
              </motion.div>

              {/* Center Profile Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-electric to-accent-950 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">ASF</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-electric">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

