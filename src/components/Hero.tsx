import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Ayush</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            I build stuff with code
          </p>
        </motion.div>

        {/* Brief Experience Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-primary">Aspiring Frontend Developer</span>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-16">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <p className="text-gray-600 dark:text-gray-300">
              Currently available for new opportunities
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 ${tech.brandColor.bg} ${tech.brandColor.text} rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who, What and Why!</h2>
          
          {/* Professional Experience */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As a seasoned technology professional with over 11 years of experience, I have had the privilege of working with various industries including <span className="text-primary font-medium">finance</span>, <span className="text-primary font-medium">healthcare</span>, <span className="text-primary font-medium">education</span>, and more. My most recent experience was as a <span className="font-medium">Lead Software Engineer</span> at <span className="font-medium">Montex Marketing LLC</span>, where I excelled in <span className="text-primary font-medium">microservices architecture</span> and mentoring new employees.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
            <p className="mb-4">
              I possess a wide range of technical skills, including proficiency in multiple programming languages such as <span className="text-primary font-medium">PHP</span>, <span className="text-primary font-medium">Python</span>, <span className="text-primary font-medium">Go Lang</span>, <span className="text-primary font-medium">JavaScript</span>, <span className="text-primary font-medium">Nodejs</span>, and <span className="text-primary font-medium">Rust</span>.
            </p>
            <p>
              I am well-versed in a variety of frameworks and technologies, including <span className="text-primary font-medium">Symfony</span>, <span className="text-primary font-medium">Laravel</span>, <span className="text-primary font-medium">Vuejs</span>, <span className="text-primary font-medium">Express js</span>, and <span className="text-primary font-medium">Flutter</span>. My expertise also extends to databases, operating systems, cloud services, and containerization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;