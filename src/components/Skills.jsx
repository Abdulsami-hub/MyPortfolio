import { motion } from 'framer-motion'
import { Code2, Palette, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-electric to-blue-500',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'Inertia.js', level: 85, color: 'bg-purple-500' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
        { name: 'Shadcn UI', level: 80, color: 'bg-slate-500' },
        { name: 'Chakra UI', level: 75, color: 'bg-teal-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Bootstrap', level: 90, color: 'bg-purple-600' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-accent-950 to-green-500',
      skills: [
        { name: 'Laravel (Blade/API)', level: 85, color: 'bg-red-500' },
        { name: 'PHP', level: 90, color: 'bg-purple-700' },
        { name: 'MySQL', level: 85, color: 'bg-blue-600' },
        { name: 'SQL Server', level: 80, color: 'bg-red-600' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'CI/CD Pipelines', level: 75, color: 'bg-blue-700' },
        { name: 'Vercel', level: 85, color: 'bg-black' },
        { name: 'Netlify', level: 80, color: 'bg-green-600' },
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'from-pink-500 to-red-500',
      skills: [
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
        { name: 'Photoshop', level: 65, color: 'bg-blue-800' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent-950 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-electric">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Capabilities
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Responsive Design', 'RESTful APIs', 'State Management', 'Performance Optimization',
              'Cross-browser Compatibility', 'SEO Best Practices', 'Testing & Debugging', 'Version Control'
            ].map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-br from-electric/10 to-accent-950/10 rounded-lg border border-electric/20 hover:border-electric/40 transition-all duration-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {capability}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

