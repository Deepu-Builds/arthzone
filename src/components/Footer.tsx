import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';
import logo from "/logo.png"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    // { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'UI/UX Design',
    'Mobile Development',
    'Cloud & DevOps'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/elitestack-tech',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      href: 'mailto:hello@elitestack.tech',
      icon: <Mail className="h-5 w-5" />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/elitestack-tech',
      icon: <Github className="h-5 w-5" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center  space-x-2 mb-6">
            
              <div className='flex justify-center items-center flex-col'> 
               <img src={logo} className="h-[70px] drop-shadow"/>
                <p className="text-xs text-muted-foreground -mt-1">Technologies</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The best way to predict the future is to create it.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 bg-muted rounded-lg text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 group"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Email</p>
                <a 
                  href="mailto:hello@elitestack.tech"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  arthzonetech@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                <a 
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 8839354160
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Location</p>
                <p className="text-muted-foreground">
                  Ratlam, India 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Arthzone Technologies. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;