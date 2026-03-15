import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Target, Eye, Heart, Users, Award, Globe, TrendingUp, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <WaterDroplet3D position={[0, 0, 0]} scale={0.6} color="#00bcd4" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              About Save Aqua
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a global non-profit organization dedicated to preserving the world's water resources through education, innovation, and community action. Our mission is to create a sustainable future where clean water is accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-16"
        >

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To reduce global water wastage by 20% by 2030 through sustainable practices, innovative solutions, and widespread awareness campaigns that empower communities worldwide.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual has access to clean, safe, and abundant water. A future where water conservation is a way of life, not an afterthought.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sustainability, Community, Transparency, and Innovation guide everything we do. We believe in collaborative action and measurable impact.
              </p>
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-full md:w-1/3 aspect-square bg-gray-800 rounded-xl overflow-hidden relative group">
               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                  <Users className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform" />
               </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold font-heading">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020 by a group of environmental scientists and social activists, Save Aqua started as a small local initiative to clean up a single lake. 
                Witnessing the massive impact of community mobilization, we expanded our operations globally. Today, we work across 50+ cities and 200+ villages, 
                impacting millions of lives through our conservation programs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a weekend cleanup project has grown into a global movement. Our success comes from empowering local communities to take ownership 
                of their water resources, combining traditional wisdom with modern technology.
              </p>
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-bold text-foreground text-lg">Dr. Emily Chen</h4>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Awards Won", value: "15+", desc: "International recognition" },
                { icon: Globe, title: "Countries", value: "25+", desc: "Global presence" },
                { icon: TrendingUp, title: "Growth Rate", value: "300%", desc: "Year over year" },
                { icon: Calendar, title: "Years Active", value: "5+", desc: "Since 2020" },
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold font-heading text-primary mb-2">{achievement.value}</div>
                  <div className="font-semibold text-foreground mb-1">{achievement.title}</div>
                  <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-center">Our Global Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { role: "Scientists & Researchers", count: "50+", icon: Target },
                { role: "Field Coordinators", count: "200+", icon: MapPin },
                { role: "Community Volunteers", count: "500+", icon: Users },
              ].map((team, index) => (
                <motion.div
                  key={team.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <team.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-primary mb-2">{team.count}</div>
                  <div className="text-muted-foreground">{team.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-8">Our Core Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Community-Driven Solutions",
                "Scientific Approach",
                "Sustainable Practices",
                "Transparent Operations",
                "Innovation & Technology",
                "Global Collaboration"
              ].map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
