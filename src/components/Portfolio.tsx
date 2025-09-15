import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '@/assets/portfolio-ecommerce.jpg';
import businessImg from '@/assets/portfolio-business.jpg';
import dashboardImg from '@/assets/portfolio-dashboard.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment integration, inventory management, and customer analytics. Built with React, Node.js, and Stripe.',
      image: ecommerceImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveDemo: '#',
      github: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Business Portfolio Site',
      description: 'Premium corporate website with CMS integration, SEO optimization, and responsive design. Features dynamic content management and analytics.',
      image: businessImg,
      technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel'],
      liveDemo: '#',
      github: '#',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'SaaS Admin Dashboard',
      description: 'Comprehensive dashboard with real-time analytics, user management, and reporting features. Built for scalability and performance.',
      image: dashboardImg,
      technologies: ['React', 'Laravel', 'MySQL', 'Chart.js', 'Redis'],
      liveDemo: '#',
      github: '#',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects showcasing cutting-edge development, 
            innovative design, and exceptional user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="default"
                      className="bg-gradient-hero text-white hover:opacity-90 transition-smooth shadow-elegant"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border hover:bg-muted transition-smooth"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to help bring your vision to life. Let's discuss your requirements 
              and create something extraordinary together.
            </p>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-hero text-white hover:opacity-90 transition-smooth shadow-elegant text-lg px-8 py-4 h-auto"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;