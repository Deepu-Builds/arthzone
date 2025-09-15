import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImg from '@/assets/hero-bg.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    'Fast',
    'Secure', 
    'Scalable',
    'Full-Stack Excellence'
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImg} 
          alt="Modern tech background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Arthzone{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Delivering Excellence.
          </p>

          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We deliver future-ready, premium web solutions built for scalability, efficiency, and measurable business impact.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-blue-50 transition-smooth shadow-elegant text-lg px-8 py-4 h-auto font-semibold group"
            >
              Let's Build Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="glass rounded-2xl p-4 md:p-6 hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-cyan-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold text-sm md:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;