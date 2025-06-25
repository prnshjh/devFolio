// SkillsSection.tsx

import TechBadge from './TechBadge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,

  SiJavascript,
 SiDocker,
  SiCplusplus,
  SiGo
} from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Vue.js', icon: <SiVuedotjs /> },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Docker', icon: <SiDocker /> },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
   
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Go', icon: <SiGo /> },
      ]
    }
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="mb-16">
      <h1 className='my-14 text-center text-4xl'>
        Tech Stack & <span className='text-neutral-500'>Skills</span>
      </h1>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              rotateY: 5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="glass animate-scale-in">
              <CardContent className="p-6">
                <motion.h3
                  className="text-lg font-semibold text-center mb-6 text-accent"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <TechBadge {...skill} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
