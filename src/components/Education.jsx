import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Database, Code2 } from 'lucide-react'

const Education = () => {
  const education = [
    {
      institution: 'Gawharshad University',
      degree: 'Bachelor of Science in Information Technology',
      duration: '2017 - 2022',
      location: 'Afghanistan',
      description: 'Comprehensive study of computer science fundamentals, software development, and information systems.',
      achievements: [
        'Graduated with distinction',
        'Specialized in software engineering',
        'Completed capstone project in web development',
        'Active member of Computer Science Club'
      ],
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering'],
      icon: GraduationCap,
      color: 'from-electric to-blue-500',
      gpa: '3.8/4.0'
    },
    {
      institution: 'Computer Technology Institute (CTI)',
      degree: 'Database Specialization',
      duration: '2017 - 2019',
      location: 'Afghanistan',
      description: 'Advanced training in database design, management, and optimization techniques.',
      achievements: [
        'Database administration certification',
        'Performance optimization expertise',
        'Real-world project implementation',
        'Advanced SQL and NoSQL knowledge'
      ],
      courses: ['Database Design', 'SQL Optimization', 'NoSQL Databases', 'Data Modeling', 'Performance Tuning'],
      icon: Database,
      color: 'from-accent-950 to-green-500',
      gpa: 'A+'
    }
  ]

  const certifications = [
    {
      name: 'React.js Development',
      issuer: 'Udemy',
      date: '2023',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Laravel Framework',
      issuer: 'Laracasts',
      date: '2023',
      icon: Code2,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Database Management',
      issuer: 'CTI',
      date: '2023',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Web Development',
      issuer: 'FreeCodeCamp',
      date: '2022',
      icon: Code2,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const skills = [
    { name: 'Academic Excellence', level: 95, icon: Award },
    { name: 'Technical Skills', level: 90, icon: Code2 },
    { name: 'Problem Solving', level: 88, icon: BookOpen },
    { name: 'Research & Analysis', level: 85, icon: BookOpen },
    { name: 'Team Collaboration', level: 92, icon: Award },
    { name: 'Continuous Learning', level: 95, icon: BookOpen }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent-950 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            My academic journey and professional development through continuous learning and certification
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color}`}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </span>
                    <span className="px-2 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                <span className="text-xs text-electric font-medium">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Skills Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Academic & Professional Skills
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Always learning and growing to deliver the best solutions
          </p>
          <a href="#contact" className="btn-primary">
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

