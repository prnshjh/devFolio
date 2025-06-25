
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const ProfileImageSection = () => {
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

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.1
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div 
            className="lg:col-span-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-neutral-900 border-4 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "rgba(59, 130, 246, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src="/lovable-uploads/b5f88e3a-3cc4-4f4a-92e9-660f7b2cb60e.png"
                  alt="Priyanshu Kumar"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-neutral-900 rounded-full p-3 sm:p-4 border border-blue-500/30"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
              >
                <div className="text-xl sm:text-2xl">👨‍💻</div>
              </motion.div>
              {/* Status indicator */}
              <motion.div 
                className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-neutral-950"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
          
          {/* Profile Info */}
          <motion.div 
            className="lg:col-span-2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Priyanshu Kumar
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer & CS Undergraduate
              </motion.p>
              
              {/* Quick stats */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
                variants={containerVariants}
              >
                {['VIT Student', 'React Developer', 'Open Source', 'Competitive Coder'].map((badge, index) => (
                  <motion.div
                    key={badge}
                    variants={badgeVariants}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    custom={index}
                  >
                    <Badge variant="secondary" className="bg-neutral-900 border-neutral-700">
                      {badge}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Card className="glass border-neutral-800">
                <CardContent className="p-6">
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    I thrive on leveraging AI and modern technologies to create innovative products that 
                    enhance user experiences and drive impact. Constantly exploring new advancements, 
                    I aim to build efficient, high-performance applications that solve real-world problems.
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-neutral-700"
                    variants={containerVariants}
                  >
                    {[
                      { value: '8.08', label: 'CGPA' },
                      { value: '2026', label: 'Graduation' },
                      { value: '15+', label: 'Projects' },
                      { value: '3+', label: 'Years' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={stat.label}
                        className="text-center"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="text-xl font-bold text-blue-400"
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(59, 130, 246, 0.5)",
                              "0 0 10px rgba(59, 130, 246, 0.8)",
                              "0 0 0px rgba(59, 130, 246, 0.5)"
                            ]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileImageSection;
