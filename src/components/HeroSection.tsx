import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroimage from '../assets/profile-2.png';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Developer',
    'Designer',
    'ML Engineer',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting
            ? current.substring(0, currentText.length - 1)
            : current.substring(0, currentText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
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
        stiffness: 80,
        delay: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Text content */}
          <div className="text-left order-2 lg:order-1">
            {/* Name */}
            <motion.h1
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Priyanshu Kumar
              </motion.span>
             
            </motion.h1>


            {/* Typing Animation */}
            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl mb-8 h-12 flex items-center text-muted-foreground"
              variants={itemVariants}
            >
              <span className="mr-4">Full Stack</span>
              <motion.span
                className="border-r-2 border-blue-400 min-h-[1em] flex items-center text-blue-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {currentText}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl "
              variants={itemVariants}
            >
              <motion.p
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Hey there! 👋 I'm a Full-Stack Developer and Competitive Programmer with a knack
                for building robust, scalable, and AI-powered web applications.
                With hands-on experience in Next.js, React, Node.js, and TypeScript, along with
                databases like MongoDB, PostgreSQL, and MySQL, I specialize in crafting seamless,
                intelligent digital solutions. I thrive on leveraging AI and modern technologies to
                create innovative products that enhance user experiences and drive impact.
              </motion.p>

            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={itemVariants}
            >
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button size="lg" className="w-full sm:w-auto bg-purple-700 hover:bg-purple-900 text-white" >
                    View My Work
                  </Button>
                </motion.div>
              </Link>
               <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent hover:bg-blue-700 text-white"
                >
                  Get In Touch
                </Button>
              </motion.div>
              </Link>
            </motion.div>

            {/* Status badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              <motion.div
               
              >
                <Badge variant="outline" className="text-xs border-green-500/50 text-green-400">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Available for hire
                </Badge>
              </motion.div>
              <motion.div>
                <Badge variant="outline" className="text-xs border-muted-foreground/30">
                  <MapPin size={12} className="mr-1" />
                  Bhopal, India
                </Badge>
              </motion.div>
              <motion.div>
                <Badge variant="outline" className="text-xs border-muted-foreground/30">
                  <Calendar size={12} className="mr-1" />
                  Graduating 2026
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[35rem] rounded-3xl overflow-hidden border border-border/50 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={heroimage}
                  alt="Priyanshu Kumar at VIT"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
