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
             

I am a passionate Frontend Developer with a strong foundation in web development, having completed my B.Tech from Kanpur Institute of Technology, and I specialize in building responsive, user-friendly, and modern web applications using technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy transforming ideas into real-world applications and have developed projects such as an e-commerce web app with product listing and cart functionality, a chat application with a smooth user interface, and an admin dashboard with structured layouts and data visualization. I focus on writing clean, maintainable code, ensuring responsive design, and optimizing performance for better user experience. I am a quick learner with strong problem-solving skills, always eager to explore new technologies and improve my development abilities. My goal is to become a skilled software developer and work on impactful real-world projects that create value while continuously growing in the tech industry.

            </p>
          </div>

          {/* Technical Skills */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
            <p className="mb-4">
              I have strong expertise in frontend development with proficiency in HTML, CSS, JavaScript, and React.js. I build responsive and user-friendly interfaces using Tailwind CSS and Bootstrap, focusing on clean UI and performance. I am experienced in working with REST APIs and developing scalable single-page applications.
            </p>
            <p>
              I also have hands-on experience with Git and GitHub for version control and collaboration. Additionally, I focus on writing clean, maintainable code, ensuring cross-browser compatibility, and continuously improving my skills with modern web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;