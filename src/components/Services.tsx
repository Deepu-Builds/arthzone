import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Server, 
  Globe, 
  Palette, 
  Smartphone, 
  Cloud, 
  Search, 
  Bot,
  Wrench
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Full Stack Solutions',
      description: 'Complete web applications from database to user interface, including CRMs, dashboards, and e-commerce.',
      features: ['End-to-End Development', 'SaaS Platforms', 'E-commerce Sites', 'Custom Dashboards']
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Next.js, Vue.js, and cutting-edge CSS frameworks.',
      features: ['React & Next.js', 'Tailwind CSS', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, Laravel, Django, and comprehensive API development.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Integration']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design with Figma prototyping, usability testing, and comprehensive design systems.',
      features: ['Figma Design', 'Design Systems', 'User Research', 'Prototyping']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure with AWS, GCP, CI/CD pipelines, and containerization.',
      features: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring']
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital presence with SEO optimization, social media, and targeted advertising.',
      features: ['SEO Audits', 'Social Media', 'Google Ads', 'Analytics']
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI & Automation',
      description: 'Intelligent solutions with chatbots, machine learning analytics, and process automation.',
      features: ['Chatbot Development', 'ML Analytics', 'Process Automation', 'AI Integration']
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support with monitoring, security updates, backups, and performance optimization.',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning', 'Backup Solutions']
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. From concept to deployment, 
            we deliver excellence at every step of your digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass border-border/50 hover:shadow-elegant transition-all duration-300 group h-full animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-hero rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you build something amazing. 
              From initial concept to final deployment, we're here to make it happen.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-hero text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-smooth shadow-elegant text-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;