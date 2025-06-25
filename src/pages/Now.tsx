
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Target, BookOpen, Code, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Now = () => {
  const currentGoals = [
    {
      icon: Target,
      title: 'Learning Data Structures & Algorithms',
      description: 'Mastering DSA concepts for technical interviews and problem-solving',
      progress: 75,
    },
    {
      icon: Code,
      title: 'Learning React Native',
      description: 'Building my first mobile app with Expo and React Native',
      progress: 30,
    },
    {
      icon: BookOpen,
      title: 'Studying System Design',
      description: 'Preparing for technical interviews and learning scalable architectures',
      progress: 40,
    },
    {
      icon: Target,
      title: 'Contributing to Open Source',
      description: 'Making meaningful contributions to React and TypeScript projects',
      progress: 25,
    },
  ];

  const currentlyReading = [
    'Clean Code by Robert C. Martin',
    'Designing Data-Intensive Applications',
    'The Pragmatic Programmer'
  ];

  const recentUpdates = [
    {
      date: 'December 2024',
      update: 'Started internship search for Summer 2025'
    },
    {
      date: 'November 2024',
      update: 'Completed AWS Cloud Practitioner certification'
    },
    {
      date: 'October 2024',
      update: 'Launched personal portfolio website'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          

          {/* Current Goals */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-8 gradient-text">
              Current Learning Goals
            </h2>
            <div className="grid gap-6">
              {currentGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <Card key={goal.title} className="glass animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="glass rounded-lg p-3">
                          <IconComponent size={24} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                          <p className="text-muted-foreground mb-4">{goal.description}</p>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                              style={{width: `${goal.progress}%`}}
                            ></div>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            {goal.progress}% complete
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Currently Reading */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-accent" size={24} />
                  <h3 className="text-xl font-semibold">Currently Reading</h3>
                </div>
                <ul className="space-y-3">
                  {currentlyReading.map((book) => (
                    <li key={book} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{book}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="text-accent" size={24} />
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Balancing final semester coursework while preparing for the job market. 
                  Focusing on building production-ready projects and contributing to open source.
                </p>
                <div className="text-sm text-accent">
                  🎯 Seeking Internships and Full time roles
                </div>
              </CardContent>
            </Card>
          </div>



          {/* CTA */}
          <div className="text-center mt-12">
           
            <Link to='/contact'> <Button className="glow hover:animate-pulse-glow">
              Get In Touch
            </Button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
