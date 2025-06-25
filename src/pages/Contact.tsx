'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRef } from 'react';

const SERVICE_ID =import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID =import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY =import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY!;


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);

      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I’ll get back to you soon!',
      });

      formRef.current?.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact me directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:prnshjh@gmail.com',
      handle: 'prnshjh@gmail.com'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/prnshjh',
      handle: '@prnshjh'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/prnshjh',
      handle: '/in/prnshjh'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass animate-scale-in">
              <CardContent className="p-8">
                <h1 className="my-3 text-center text-4xl">
                  Send a <span className="text-neutral-500">Message</span>
                </h1>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="user_name"
                      name="user_name"
                      required
                      className="glass"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      className="glass"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="glass"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="glass resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full glow hover:animate-pulse-glow"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="glass animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Let's <span className="text-neutral-500">Connect</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new opportunities, interesting projects,
                    or just having a friendly chat about technology and development.
                  </p>
                  <div className="space-y-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 p-3 glass rounded-lg hover:glow transition-all duration-300 group"
                        >
                          <Icon size={24} className="text-accent group-hover:animate-bounce" />
                          <div>
                            <div className="font-medium">{link.name}</div>
                            <div className="text-sm text-muted-foreground">{link.handle}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to messages within 24 hours. For urgent inquiries,
                    feel free to reach out directly via email or LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
