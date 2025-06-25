
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Search, Github, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ptIMG from '@/assets/lynk.png';
import algoIMG from '@/assets/algorim.png';
import folioIMG from '@/assets/portfolio.png';
import finIMG from '@/assets/sakhi.png';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: 'Lynk',
      description: 'A video conferencing platform with real-time collaboration features. Built with Stream,Typescript and React for a seamless user experience.',
      image: ptIMG,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stream', 'Clerk', 'Tailwind CSS'],
      githubUrl: 'https://github.com/prnshjh/lynk',
      liveUrl: 'https://lynk-gilt.vercel.app/',
      featured: true,
      category: 'SaaS'
    },
    {
      title: 'Algorim',
      description: ' Developed a full-stack DSA learning platform featuring progress tracking, and dynamic question filtering for personalized practice , Integrated Gemini AI to enable real-time Q&A support, AI-driven mock interviews with instant feedback, Implemented advanced modules including analytics, structured roadmaps, creating a engaging learning experience',
      image: algoIMG,
      technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript', 'Gemini API'],
      githubUrl: 'https://github.com/prnshjh/algorim',
      liveUrl: 'https://algorim.vercel.app/',
      category: 'fullstack'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, blogs and experience. Built with React.js and Tailwind CSS for a modern, responsive design.',
      image: folioIMG,
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Supabase', 'TypeScript'],
      githubUrl: 'https://github.com/prnshjh/devfolio',
      liveUrl: 'https://demo.com',
      category: 'frontend'
    },
    {
      title: 'GitChat',
      description: 'A microservice-based Saas platform that revolutionize project collaboration and management',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'TypeScript', 'Gemini API'],
      githubUrl: 'https://github.com/prnshjh/GitChat',
      category: 'machine-learning',
    },
    {
      title: 'Sakhi Finance',
      description: 'An AI-powered fintech platform that helps you with financial education, micro-investments, and secure banking with real-time insights in an accessible, user-friendly app.',
      image: finIMG,
      technologies: ['React', 'Web3.js', 'React', 'Ingest', 'Arcjet'],
      githubUrl: 'https://github.com/prnshjh/Sakhi-Finance',
      liveUrl: 'https://sakhi-finance.vercel.app/',
      category: 'fullstack'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    // { id: 'backend', name: 'Backend' },
    { id: 'SaaS', name: 'SaaS' },
    { id: 'machine-learning', name: 'ML/AI' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
           
           
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className={filter === category.id ? "glow" : "glass hover:glow"}
                  size="sm"
                >
                  <Filter size={16} className="mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filter criteria
              </p>
              <Button onClick={() => { setFilter('all'); setSearchTerm(''); }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* GitHub CTA Section */}
          <div className="text-center">
            <Card className="glass max-w-2xl mx-auto animate-fade-in">
              <CardContent className="p-8">
                <Github size={48} className="mx-auto mb-4 text-accent" />
                <h2 className="text-2xl font-semibold mb-4">
                  Want to see more?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Check out my GitHub for more projects, contributions to open source, 
                  and code snippets. I'm always working on something new!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/prnshjh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="glow hover:animate-pulse-glow">
                      <Github size={16} className="mr-2" />
                      View GitHub Profile
                    </Button>
                  </a>
                  <a 
                    href="https://github.com/prnshjh?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="glass hover:glow">
                      <ExternalLink size={16} className="mr-2" />
                      Browse Repositories
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
