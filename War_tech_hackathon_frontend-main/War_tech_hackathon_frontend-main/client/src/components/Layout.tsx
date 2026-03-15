import { ReactNode } from 'react';
import { WaterBackground } from '@/components/WaterBackground';
import { Navbar } from '@/components/Navbar';
import { Droplets } from 'lucide-react';
import { Link } from 'wouter';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 relative z-10 bg-black/40 mt-auto">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-8">
             <Droplets className="w-6 h-6 text-primary" />
             <span className="text-xl font-bold font-heading text-foreground">Save<span className="text-primary">Aqua</span></span>
          </div>
          <p className="mb-8">© 2025 Water Conservation Mission. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/about" className="hover:text-primary transition-colors text-sm">About Us</Link>
            <Link href="/contact" className="hover:text-primary transition-colors text-sm">Contact</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors text-sm">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
