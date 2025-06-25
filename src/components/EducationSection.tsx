import { motion } from 'framer-motion';
import vitLogo from '../assets/vit-logo.png';
const EducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl text-center mb-20 font-bold text-neutral-100"
        >
          Education
        </motion.h2>

        <motion.div 
          className="flex flex-wrap lg:justify-center items-start gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Logo */}
          <motion.div 
            variants={leftVariants}
            className="w-full lg:w-1/4 flex flex-col items-center text-center"
          >
            <img 
              src={vitLogo}
              alt="VIT Logo"
              className="h-40 mb-5 brightness-0 invert"
            />
            <p className="text-sm text-neutral-400">2022 - 2026</p>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
            variants={rightVariants}
            className="w-full max-w-xl lg:w-3/4 text-left"
          >
            <h6 className="mb-2 font-semibold text-purple-100 text-lg">
              B.Tech in CSE - 
              <span className="text-purple-400"> Vellore Institute of Technology</span>
            </h6>
            <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
              I am currently pursuing my B.Tech at VIT, where I’m developing a solid foundation in 
              Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, 
              Computer Networks, Cloud Computing, DBMS, and Machine Learning. I’ve worked on hands-on 
              projects, collaborated with peers, and participated in hackathons to enhance my problem-solving skills.
            </p>

            {/* Styled CGPA badge */}
            <span className="inline-block mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
              CGPA: 8.08 (upto 6th Semester)
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
