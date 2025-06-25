
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
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

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div 
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-50"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div 
            key={`${item.year}-${item.title}`}
            className="flex items-start gap-6"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="flex-shrink-0 w-16 h-16 glass rounded-full flex items-center justify-center text-sm font-bold text-accent border-2 border-accent/30 relative z-10"
              variants={dotVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                borderColor: "rgba(var(--accent), 0.8)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200,
                duration: 0.6
              }}
            >
              {item.year}
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex-1"
            >
              <Card className="glass">
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                    <p className="text-muted-foreground font-medium">{item.organization}</p>
                  </motion.div>
                  <motion.p 
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                  
                  {item.achievements && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + 0.6 }}
                    >
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + 0.8 + (i * 0.1) }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
