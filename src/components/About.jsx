import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Afghanistan' },
    { icon: Calendar, label: 'Experience', value: '1+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'BSc Information Technology' },
    { icon: Briefcase, label: 'Current Role', value: 'Full-Stack Developer' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent-950 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto p-1 bg-gradient-to-br from-electric to-accent-950 rounded-2xl shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Abdul Sami Fazilyar"
                  className="w-full h-full object-cover rounded-[14px] bg-gray-200 dark:bg-gray-700"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ float: 6 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-950 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">ASF</span>
              </motion.div>
              <motion.div
                animate={{ float: 6 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-electric rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-mono text-sm">Dev</span>
              </motion.div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                >
                  <info.icon className="w-6 h-6 text-electric mx-auto mb-2" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">{info.label}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{info.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full-Stack Developer with a Passion for Innovation
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a Full-Stack Developer with over one year of professional experience building modern web applications. My expertise spans React.js, Laravel (Blade/API), PHP, MySQL, SQL Server, Tailwind CSS, and advanced UI frameworks.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I have developed systems like <span className="text-electric font-semibold">InsightDeed.com</span>, a QR Code system, and a Tax Management System. I am currently working at <span className="text-electric font-semibold">Naikbeen Control Panel</span>.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I hold a degree in Information Technology from <span className="text-electric font-semibold">Gawharshad University</span> and a specialization in Databases from <span className="text-electric font-semibold">Computer Technology Institute (CTI)</span>.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate about learning, I also have skills in Git, GitHub, CI/CD pipelines, Vercel deployment, and building fully responsive designs with modern frameworks.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-electric/10 to-accent-950/10 rounded-lg border border-electric/20"
              >
                <div className="text-2xl font-bold text-electric">Modern</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Web Technologies</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-accent-950/10 to-electric/10 rounded-lg border border-accent-950/20"
              >
                <div className="text-2xl font-bold text-accent-950">Scalable</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Architecture</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-electric/10 to-accent-950/10 rounded-lg border border-electric/20"
              >
                <div className="text-2xl font-bold text-electric">Responsive</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Design</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-accent-950/10 to-electric/10 rounded-lg border border-accent-950/20"
              >
                <div className="text-2xl font-bold text-accent-950">Performance</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Optimized</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

