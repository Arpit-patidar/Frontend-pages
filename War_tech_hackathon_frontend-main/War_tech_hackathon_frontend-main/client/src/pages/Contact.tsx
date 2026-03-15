import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions or want to collaborate? Reach out to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 glass p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 glass p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-muted-foreground">hello@saveaqua.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4 glass p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-muted-foreground">123 Green Street, Eco City, Earth</p>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="w-full h-64 bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Map Placeholder
               </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help?" className="bg-white/5 border-white/10 min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
