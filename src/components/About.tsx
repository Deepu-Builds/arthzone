import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5', label: 'Our Team Members' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Mission Driven',
      description: 'Delivering end-to-end, high-quality, scalable web solutions that exceed expectations.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technologies to build future-ready applications.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Excellence Standard',
      description: 'Maintaining the highest standards of code quality, performance, and user experience.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Team Collaboration',
      description: 'Working closely with clients to understand their vision and deliver beyond expectations.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Arthzone
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            we are a hub of innovation and engineering excellence, delivering scalable, secure, and future-ready digital solutions. With a vision to empower businesses through technology, we specialize in building systems that drive growth, enhance efficiency, and create long-term value across industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="glass border-border/50 hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <strong className='text-black'>ArthZone Technologies</strong> was founded with a singular vision: to create technology that delivers real impact.
              </p>
              <p className="text-lg">
                From the beginning, we have focused on engineering solutions that are scalable, secure, and future-ready, empowering businesses to operate efficiently in a fast-paced digital world.
              </p>
              <p className="text-lg">
                We believe in building long-term partnerships with our clients, delivering 
                projects that drive real business value and growth.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 shadow-soft">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Our Foundation
                </h4>
                <p className="text-muted-foreground">
                  Shaped by vision, powered by precision, and dedicated to driving growth. We go beyond technology to enable success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="glass border-border/50 hover:shadow-elegant transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;