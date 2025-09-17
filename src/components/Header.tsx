import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex justify-center items-center flex-col">
              <img src={logo} className="h-[70px] drop-shadow" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center   space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="relative text-foreground text-[#00aaff] hover:text-[#00ccff] hover:scale-105 transition-smooth font-medium
             after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00ccff]
             after:scale-x-0 after:origin-right hover:after:scale-x-100 after:transition-transform after:duration-300
             hover:after:origin-left"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="relative text-foreground text-[#00aaff] hover:text-[#00ccff] hover:scale-105 transition-smooth font-medium
             after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00ccff]
             after:scale-x-0 after:origin-right hover:after:scale-x-100 after:transition-transform after:duration-300
             hover:after:origin-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative text-foreground text-[#00aaff] hover:text-[#00ccff] hover:scale-105 transition-smooth font-medium
             after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00ccff]
             after:scale-x-0 after:origin-right hover:after:scale-x-100 after:transition-transform after:duration-300
             hover:after:origin-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="relative text-foreground text-[#00aaff] hover:text-[#00ccff] hover:scale-105 transition-smooth font-medium
             after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00ccff]
             after:scale-x-0 after:origin-right hover:after:scale-x-100 after:transition-transform after:duration-300
             hover:after:origin-left"
            >
              Portfolio
            </button>
            {/* <button
              onClick={() => scrollToSection('team')}
              className="relative text-foreground text-[#00aaff] hover:text-blue-300 hover:scale-105 transition-smooth font-medium
             after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00ccff]
             after:scale-x-0 after:origin-right hover:after:scale-x-100 after:transition-transform after:duration-300
             hover:after:origin-left"
            >
              Team
            </button> */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-hero  text-white  hover:opacity-90 transition-smooth shadow-elegant"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-1 py-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Team
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-hero text-white hover:opacity-90 transition-smooth shadow-elegant"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
