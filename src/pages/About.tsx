import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';
import { Card, CardContent } from '@/components/ui/card';
import {
  RiReactjsLine
} from 'react-icons/ri';
import {
  TbBrandNextjs
} from 'react-icons/tb';
import {
  SiMongodb, SiExpress, SiTailwindcss,
  SiGit, SiGithub, SiDocker, SiPostman, SiCplusplus,
  SiPython, SiMysql, SiJavascript, SiTypescript, SiFigma
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation logic
const iconMotionL = (duration: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 }
  },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
});

const iconMotionR = (duration: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 }
  },
  animate: {
    y: [-10, 10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
});

const technologies = [
  { label: 'C++', icon: <SiCplusplus className="text-6xl text-blue-700" />, motion: iconMotionL(2.5) },
  { label: 'Python', icon: <SiPython className="text-6xl text-yellow-500" />, motion: iconMotionL(2.5) },
  { label: 'MySQL', icon: <SiMysql className="text-6xl text-blue-400" />, motion: iconMotionL(3) },
  { label: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-300" />, motion: iconMotionL(4) },
  { label: 'TypeScript', icon: <SiTypescript className="text-6xl text-blue-500" />, motion: iconMotionL(5) },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl text-sky-400" />, motion: iconMotionR(2) },
  { label: 'React', icon: <RiReactjsLine className="text-6xl text-cyan-400" />, motion: iconMotionR(7) },
  { label: 'Next.js', icon: <TbBrandNextjs className="text-6xl text-neutral-300" />, motion: iconMotionR(4) },
  { label: 'Node.js', icon: <FaNodeJs className="text-6xl text-green-300" />, motion: iconMotionR(2.5) },
  { label: 'Express.js', icon: <SiExpress className="text-6xl text-neutral-400" />, motion: iconMotionR(3) },
  { label: 'MongoDB', icon: <SiMongodb className="text-6xl text-green-600" />, motion: iconMotionL(4) },
  { label: 'Git', icon: <SiGit className="text-6xl text-orange-500" />, motion: iconMotionL(5) },
  { label: 'GitHub', icon: <SiGithub className="text-6xl text-white" />, motion: iconMotionL(7) },
  { label: 'Docker', icon: <SiDocker className="text-6xl text-blue-400" />, motion: iconMotionR(4) },
  { label: 'Postman', icon: <SiPostman className="text-6xl text-orange-500" />, motion: iconMotionR(3) },
  { label: 'Figma', icon: <SiFigma className="text-6xl text-orange-500" />, motion: iconMotionR(7) },
];

const Technical = () => (
  <div className="pb-24">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-20 text-center text-4xl"
    >
      Technologies
    </motion.h2>

    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={tech.motion}
          initial="hidden"
          whileInView="visible"
          animate="animate"
          viewport={{ once: true }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label={tech.label}
          title={tech.label}
        >
          {tech.icon}
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const About = () => {
  const timelineData = [
    {
      year: '2025',
      title: 'Artificial Intelligence and Machine learning analyst Intern',
      organization: 'Sustainivo',
      description:
        'Worked on AI/ML projects, focusing on data analysis and model development. Gained hands-on experience in Python and machine learning frameworks.',
      achievements: [
        "GPA: 8.08/10",
        'Led team of 10 students in Engineering project in Community Services - Lung Cancer Classification and Prediction Model',
        'Teaching Assistant for Computer Networks course',
      ],
    },
    {
      year: '2024',
      title: 'Technical team co-lead',
      organization: 'E-Cell VITB',
      description:
        'Developed React applications and contributed to backend APIs. Gained experience in web development and code reviews.',
      achievements: [
        'Built responsive Website used by 1000+ users',
        'Optimized API endpoints reducing response time by 40%',
        'Mentored 2 juniors in React best practices',
      ],
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      organization: 'Freelance',
      description:
        'Focusing on advanced algorithms, system design, and full-stack development and Learning the Computer Science Student Fundamentals.',
      achievements: [
        'Competed in several hackathons, winning 2nd place in VIT Hackathon',
        'Specialized in React and modern CSS frameworks',
        'Spent time learning CS fundamentals and advanced algorithms',
      ],
    },
    {
      year: '2022',
      title: 'Computer Science Journey Begins',
      organization: 'Vellore Institute of Technology',
      description:
        'Enrolled in Computer Science program. Discovered passion for web development through Introduction to Programming course.',
      achievements: [
        'First programming language: C',
        'Built first web application - Student Grade Calculator',
        'Joined Microsoft Technical Community as a member',
      ],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
           
          </div>

          {/* Technologies Section */}
          <Technical />
          <div className="mb-16 w-full px-4 md:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full">
              <img
                src="https://github-readme-stats.vercel.app/api?username=prnshjh&theme=highcontrast&show_icons=true&hide_border=true&count_private=true"
                alt="GitHub Stats"
                className="rounded-lg shadow w-full max-w-md md:max-w-lg"
              />
              <img
                src="https://streak-stats.demolab.com?user=prnshjh&theme=highcontrast&hide_border=true"
                alt="GitHub Streak Stats"
                className="rounded-lg shadow w-full max-w-md md:max-w-lg"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=prnshjh&theme=highcontrast&show_icons=true&hide_border=true&layout=compact"
                alt="Top Languages"
                className="rounded-lg shadow w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>

          {/* Technologies Section
          <Technical /> */}

        {/* Certifications Section */}
<div className="mb-16">
  <h2 className="text-center text-3xl font-semibold text-neutral-300 mb-8">Certifications</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    
    {/*  Certification Card */}
    <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/sdeCertificate.jpeg"
          alt="Full Stack Software Developer Assessment"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">Full Stack Software Developer Assessment</h3>
        <p className="text-sm text-muted-foreground">Coursera • IBM • 2023</p>
      </CardContent>
    </Card>

    <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/cloudCertificate.jpg"
          alt="Cloud Computing Certificate (NPTEL)"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">Cloud Computing</h3>
        <p className="text-sm text-muted-foreground">NPTEL • IIT-KGP • 2024 </p>
      </CardContent>
    </Card>

    <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/cnCertificate.jpeg"
          alt="Certicate in Computer Networks"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">The Bits and Bytes of Computer Networking</h3>
        <p className="text-sm text-muted-foreground">Coursera • Google • 2023</p>
      </CardContent>
    </Card>
     <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/nlpCertificate.jpg"
          alt="Certicate in NLP"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">Introduction to NLP</h3>
        <p className="text-sm text-muted-foreground">GLA • 2023</p>
      </CardContent>
    </Card>
      <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/uiCertificate.jpg"
          alt="Certicate in UI design"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">UX Design Foundation by Adobe</h3>
        <p className="text-sm text-muted-foreground">Nasscom • Adobe • 2025</p>
      </CardContent>
    </Card>
     <Card className="glass shadow-lg border border-gray-700">
      <CardContent className="p-4">
        <img
          src="/src/assets/maCertificate.jpg"
          alt="Certicate in Marketing Analytics"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-lg font-medium text-white">UX Design Foundation by Adobe</h3>
        <p className="text-sm text-muted-foreground">NPTEL • IITKGP • 2025</p>
      </CardContent>
    </Card>
  </div>
</div>


          {/* Timeline */}
          <div className="mb-16">
            <h1 className="my-14 text-center text-4xl">
              My <span className="text-neutral-500">Journey</span>
            </h1>
            <Timeline items={timelineData} />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="glass max-w-2xl mx-auto animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
                  to say hi, feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to='/contact'> <button className="glow hover:animate-pulse-glow px-6 py-2 rounded-md bg-purple-600  hover:bg-purple-700 text-white">Get In Touch</button> </Link>
                 <Link to='/projects'> <button className="glass hover:glow px-6 py-2 rounded-md border border-gray-600  hover:bg-blue-700 text-white">View My Work</button> </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
