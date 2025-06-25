
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaInstagram, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef } from 'react-icons/si';
import logo from '../assets/pk-lg2.png';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Now', path: '/now' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prnshjh/', label: 'LinkedIn', hoverColor: 'hover:text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/prnshjh', label: 'GitHub', hoverColor: 'hover:text-gray-600' },
    { icon: FaMedium, href: 'https://priyanshuwrites.medium.com/', label: 'Medium', hoverColor: 'hover:text-green-400' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/prnshjh/', label: 'LeetCode', hoverColor: 'hover:text-yellow-400' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/user/prnshjh/', label: 'GeeksforGeeks', hoverColor: 'hover:text-green-600' },
    { icon: SiCodeforces, href: 'https://codeforces.com/profile/prnshjh', label: 'Codeforces', hoverColor: 'hover:text-blue-500' },
    { icon: SiCodechef, href: 'https://www.codechef.com/users/prnshjh', label: 'CodeChef', hoverColor: 'hover:text-orange-400' },
    { icon: FaInstagram, href: 'https://www.instagram.com/priyanshujha.19/', label: 'Instagram', hoverColor: 'hover:text-pink-500' },
    { icon: FaFileAlt, href: 'https://drive.google.com/file/d/1s0EYI07_AfWDgBWKGXPSOWMpKHzUrWOW/view?usp=drivesdk', label: 'Resume', hoverColor: 'hover:text-blue-500' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
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
        stiffness: 300
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img className="mx-2 w-12" src={logo} alt="logo" />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <motion.div 
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-accent hover:bg-accent/10 ${
                      isActive(item.path)
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                 className={`p-2 text-muted-foreground transition-colors rounded-lg hover:bg-accent/10 text-xl ${social.hoverColor}`}
                  aria-label={social.label}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                 <IconComponent />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="fixed inset-0 bg-neutral-950/90" 
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="fixed top-16 left-0 right-0 bottom-0 bg-neutral-950 border-t border-border overflow-y-auto"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 py-6">
                <motion.div className="space-y-2 mb-8">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:text-accent hover:bg-accent/10 ${
                          isActive(item.path)
                            ? 'text-accent bg-accent/10 border border-accent/20'
                            : 'text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Mobile Social Links */}
                <motion.div 
                  className="pt-6 border-t border-border"
                  variants={itemVariants}
                >
                  <div className="text-sm text-muted-foreground text-center mb-4">Connect with me</div>
                  <motion.div 
                    className="grid grid-cols-3 gap-4"
                    variants={menuVariants}
                  >
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-2 p-3 bg-neutral-900 rounded-lg hover:bg-accent/10 transition-colors text-4xl ${social.hoverColor}`}
                          aria-label={social.label}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <IconComponent className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{social.label}</span>
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
