import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Code2, Database } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Naikbeen Control Panel',
      position: 'Full-Stack Developer',
      duration: 'Present',
      location: 'Afghanistan',
      type: 'Full-time',
      description: 'Leading development of modern web applications and systems using React.js, Laravel, and modern web technologies.',
      achievements: [
        'Developed and maintained multiple client projects',
        'Implemented responsive designs and modern UI/UX',
        'Collaborated with cross-functional teams',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Git'],
      icon: Code2,
      color: 'from-electric to-blue-500'
    },
    {
      company: 'Freelance Development',
      position: 'Full-Stack Developer',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Contract',
      description: 'Delivering high-quality web solutions for various clients across different industries and domains.',
      achievements: [
        'Completed 10+ projects with 100% client satisfaction',
        'Built custom solutions for diverse business requirements',
        'Implemented modern development practices and CI/CD',
        'Provided ongoing support and maintenance services'
      ],
      technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'Vue.js', 'Docker'],
      icon: Users,
      color: 'from-accent-950 to-green-500'
    },
    {
      company: 'Personal Projects',
      position: 'Independent Developer',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Personal',
      description: 'Developing innovative solutions and contributing to open-source projects to enhance skills and portfolio.',
      achievements: [
        'Created InsightDeed.com job portal platform',
        'Developed QR Code management system',
        'Built Tax Management System for financial institutions',
        'Contributed to various open-source projects'
      ],
      technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Framer Motion'],
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code2 },
    { name: 'Backend Development', level: 85, icon: Database },
    { name: 'Database Design', level: 80, icon: Database },
    { name: 'API Development', level: 85, icon: Code2 },
    { name: 'UI/UX Design', level: 75, icon: Code2 },
    { name: 'DevOps', level: 70, icon: Code2 }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent-950 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey in web development, showcasing growth and achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric to-accent-950 lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-electric rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-16 lg:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </span>
                          <span className="px-2 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Skills Development Over Time
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <skill.icon className="w-6 h-6 text-electric" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="font-semibold text-electric">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-electric to-accent-950 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

