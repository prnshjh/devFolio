'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import GitHubCalendar from 'react-github-calendar';

const CodingStatsSection = () => {
  const platforms = [
    {
      name: 'LeetCode',
      username: 'prnshjh',
      solved: '250+',
      rating: '1567',
      rank: 'Guardian',
      url: 'https://leetcode.com/prnshjh',
      icon: <SiLeetcode className="text-orange-500 text-3xl" />
    },
    {
      name: 'CodeChef',
      username: 'prnshjh',
      solved: '100+',
      rating: '1402',
      rank: '2⭐',
      url: 'https://codechef.com/prnshjh',
      icon: <SiCodechef className="text-amber-600 text-3xl" />
    },
    {
      name: 'Codeforces',
      username: 'prnshjh',
      solved: '50+',
      rating: '1100',
      rank: 'Pupil',
      url: 'https://codeforces.com/profile/alexchen',
      icon: <SiCodeforces className="text-blue-500 text-3xl" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contributions
        </motion.h2>

        {/* GitHub Graph */}
        <motion.div
          className="mb-16 flex justify-center overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GitHubCalendar
            username="prnshjh"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
            colorScheme="dark"
          />
        </motion.div>

        

        {/* Competitive Programming Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass hover:glow transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mx-auto mb-4">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-bold text-accent">{platform.name}</h3>
                    <p className="text-muted-foreground">@{platform.username}</p>
                  </motion.div>

                  <div className="space-y-4 mb-6">
                    {[
                      { label: 'Problems Solved:', value: platform.solved },
                      { label: 'Rating:', value: platform.rating },
                      { label: 'Rank:', value: platform.rank }
                    ].map((item, itemIndex) => (
                      <motion.div
                        key={item.label}
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.1) }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className={`font-semibold ${item.label === 'Rating:' ? 'text-accent' : ''}`}>
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" className="w-full glass hover:glow">
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Profile
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStatsSection;
