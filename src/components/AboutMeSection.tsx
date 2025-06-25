
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import aboutImg from '../assets/pk-about.png';
const AboutMeSection = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <h1  className='my-14 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={leftVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={aboutImg} alt="About"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
             
              
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="text-left"
            variants={rightVariants}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm a Computer Science student at VIT, with a strong passion for Web App Development, 
                AI integration, and Competitive Programming. Proficient in React, Next.js, Node.js, 
                TypeScript, and databases like MySQL, PostgreSQL, and MongoDB.
                 I specialize in developing scalable, AI-powered, and real-time web applications that 
                enhance user experiences and deliver meaningful impact. Beyond development, I am 
                currently enhancing my skills in DevOps, backend architecture, cloud deployment 
                to ensure seamless scalability, security, and high availability of applications.
                My tech journey began with a deep curiosity for problem-solving, which has grown into 
                a career focused on continuous learning, innovation, and pushing boundaries. I am 
                committed to building high-quality, impactful digital products.
              </motion.p>
             
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
