import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, Github } from 'lucide-react';
import deepakImg from '@/assets/team-deepak.jpg';
import dharmrajImg from '@/assets/team-dharmraj.jpg';
import vijayImg from '@/assets/team-vijay.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Deepak',
      role: 'Frontend Lead',
      specialization: 'React & UI/UX Expert',
      image: deepakImg,
      bio: 'Passionate about creating exceptional user experiences with modern frontend technologies. Specializes in React, Next.js, and responsive design.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
      social: {
        linkedin: '#',
        email: 'deepak@elitestack.tech',
        github: '#'
      }
    },
    {
      name: 'Dharmraj (Ajay)',
      role: 'Frontend Developer',
      specialization: 'Component Architecture Specialist',
      image: dharmrajImg,
      bio: 'Expert in building scalable frontend architectures and reusable component systems. Focuses on performance optimization and modern development practices.',
      skills: ['Vue.js', 'React', 'JavaScript', 'SASS', 'Component Design'],
      social: {
        linkedin: '#',
        email: 'dharmraj@elitestack.tech',
        github: '#'
      }
    },
    {
      name: 'Vijay',
      role: 'Backend & Database Expert',
      specialization: 'Server Architecture & APIs',
      image: vijayImg,
      bio: 'Backend specialist with expertise in server architecture, database design, and API development. Ensures robust, scalable, and secure backend solutions.',
      skills: ['Node.js', 'Laravel', 'MongoDB', 'MySQL', 'API Design'],
      social: {
        linkedin: '#',
        email: 'vijay@elitestack.tech',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three passionate developers united by a shared vision: delivering exceptional 
            web solutions that drive business success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="glass border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.social.linkedin}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors text-primary"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors text-primary"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.social.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.specialization}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 text-center">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-muted text-foreground rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center">
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-xs text-accent hover:text-primary transition-colors font-medium"
                    >
                      {member.social.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="glass rounded-3xl p-8 md:p-12 shadow-soft text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Choose Our Team?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Complementary Skills
              </h4>
              <p className="text-muted-foreground text-sm">
                Our team combines frontend expertise with backend mastery, 
                covering the complete development spectrum.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">∞</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Continuous Learning
              </h4>
              <p className="text-muted-foreground text-sm">
                We stay updated with the latest technologies and best practices 
                to deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Innovation Focus
              </h4>
              <p className="text-muted-foreground text-sm">
                We bring fresh perspectives and innovative solutions 
                to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;