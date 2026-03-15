import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Droplets, Waves, CloudRain, BookOpen, TrendingUp, Award, Target, Heart, Zap, Shield, Leaf, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { Link } from 'wouter';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Global Water Crisis Alert
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              Water Conservation <br />
              Mission – <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 text-glow">Save Aqua</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Join the global movement to protect our most precious resource. 
              Together, we can secure a sustainable future for our planet's oceans and rivers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/join">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full shadow-[0_0_20px_rgba(0,188,212,0.4)] transition-transform hover:scale-105 cursor-pointer">
                  Join the Mission <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-lg px-8 h-14 rounded-full backdrop-blur-sm cursor-pointer">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Stats with 3D Droplet */}
          <div className="relative z-10 grid gap-6">
            {/* 3D Water Droplet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex justify-center items-center mb-4"
            >
              <div className="relative">
                <WaterDroplet3D position={[0, 0, 0]} scale={0.8} color="#00bcd4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">Save</div>
                    <div className="text-2xl font-semibold text-muted-foreground">Aqua</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {[
              { label: "Volunteers", value: "500+", icon: Users, color: "text-blue-400" },
              { label: "Communities", value: "50+", icon: Globe, color: "text-teal-400" },
              { label: "Litres Saved", value: "1M+", icon: Droplets, color: "text-cyan-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.2), duration: 0.6 }}
                className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:scale-105 transition-transform"
              >
                <div className={`p-4 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-heading">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* WHY SAVE AQUA SECTION */}
      <section className="py-24 relative z-10" id="about">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl font-bold font-heading">Why Save Aqua?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Water is the essence of life, yet it is under threat like never before. 
              Pollution, climate change, and wastage are depleting our freshwater reserves. 
              Our mission is to educate, act, and restore the balance of our ecosystem through 
              community-driven initiatives and sustainable practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS SECTION */}
      <section className="py-24 relative z-10 bg-black/20 backdrop-blur-sm" id="focus">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We tackle water conservation through multiple strategic initiatives
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Pollution Control", 
                desc: "Cleaning rivers and oceans from plastic and industrial waste through community-driven cleanup initiatives.",
                icon: Waves,
                color: "from-blue-500 to-indigo-500",
                link: "/pollution",
                stats: "200+ Cleanups"
              },
              { 
                title: "Rainwater Harvesting", 
                desc: "Implementing systems to capture and store rainwater for sustainable use in homes and communities.",
                icon: CloudRain,
                color: "from-cyan-500 to-blue-500",
                link: "/rainwater",
                stats: "500+ Installations"
              },
              { 
                title: "Awareness & Education", 
                desc: "Workshops and campaigns to teach communities about water conservation and sustainable practices.",
                icon: BookOpen,
                color: "from-teal-500 to-emerald-500",
                link: "/events",
                stats: "10K+ Participants"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl group hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${area.color} shadow-lg group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.desc}</p>
                <div className="text-sm text-primary font-semibold mb-4">{area.stats}</div>
                <Link href={area.link}>
                  <Button variant="link" className="mt-4 p-0 text-primary hover:text-primary/80">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-24 relative z-10" id="stats">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Impact by Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our global water conservation efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1M+", label: "Liters Saved", icon: Droplets, color: "from-cyan-400 to-blue-500" },
              { value: "500+", label: "Active Volunteers", icon: Users, color: "from-blue-400 to-indigo-500" },
              { value: "50+", label: "Communities", icon: Globe, color: "from-teal-400 to-emerald-500" },
              { value: "200+", label: "Projects Completed", icon: Award, color: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl text-center group hover:scale-110 transition-transform"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 relative z-10 bg-black/20 backdrop-blur-sm" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">How We Make a Difference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to water conservation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Research & Analysis", desc: "Identify water crisis areas and assess needs", icon: Target },
              { step: "02", title: "Community Engagement", desc: "Mobilize local communities and volunteers", icon: Users },
              { step: "03", title: "Implementation", desc: "Deploy solutions and conservation programs", icon: Zap },
              { step: "04", title: "Monitor & Improve", desc: "Track progress and optimize strategies", icon: TrendingUp },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl relative group hover:scale-105 transition-all"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 relative z-10" id="testimonials">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from our community members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Community Leader",
                location: "San Francisco, CA",
                content: "Save Aqua transformed our neighborhood. We've reduced water consumption by 40% and our community is more aware than ever.",
                icon: Heart
              },
              {
                name: "Rajesh Kumar",
                role: "Farmer",
                location: "Rajasthan, India",
                content: "The rainwater harvesting system changed our lives. We now have water throughout the year, even during droughts.",
                icon: Leaf
              },
              {
                name: "Maria Garcia",
                role: "Environmental Activist",
                location: "Barcelona, Spain",
                content: "The cleanup initiatives are incredible. We've removed over 5 tons of plastic from our local river. Thank you Save Aqua!",
                icon: Shield
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <testimonial.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-24 relative z-10 bg-gradient-to-br from-primary/20 via-transparent to-teal-500/20" id="cta">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8 glass-card p-12 rounded-3xl"
          >
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/20 mb-4">
              <Activity className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of volunteers working together to conserve water and protect our planet's most precious resource.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/join">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full shadow-[0_0_30px_rgba(0,188,212,0.5)] transition-transform hover:scale-105 cursor-pointer">
                  Join Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-lg px-8 h-14 rounded-full backdrop-blur-sm cursor-pointer">
                  View Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
