import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pollution', href: '/pollution' },
    { name: 'Rainwater', href: '/rainwater' },
    { name: 'Cities', href: '/cities' },
    { name: 'Villages', href: '/villages' },
    { name: 'Households', href: '/households' },
    { name: 'Activities', href: '/activities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Success', href: '/success' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer mr-8">
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold font-heading tracking-wide whitespace-nowrap">Save<span className="text-primary">Aqua</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6 flex-1 justify-end">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className={`text-sm font-medium transition-colors relative group whitespace-nowrap ${
                  location === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  location === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
             <Link href="/login">
               <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Login</a>
             </Link>
             <Link href="/join">
               <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary whitespace-nowrap cursor-pointer">
                Join Us
               </Button>
             </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-foreground p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  location === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login">
              <a className="text-lg font-medium text-foreground/80 hover:text-primary py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Login / Register</a>
            </Link>
            <Link href="/join">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setMobileMenuOpen(false)}>
                Join the Mission
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
