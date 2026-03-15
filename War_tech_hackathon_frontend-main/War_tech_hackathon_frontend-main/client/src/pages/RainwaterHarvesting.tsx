import { motion } from 'framer-motion';
import { CloudRain, Home, Sprout, TrendingDown, CheckCircle2, Droplets, BarChart3, Leaf, Zap, Award, Users } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function RainwaterHarvesting() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <WaterDroplet3D position={[0, 0, 0]} scale={0.6} color="#00bcd4" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Rainwater Harvesting
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Catching the rain where it falls: A sustainable solution for water scarcity. Transform rainfall into a reliable water source for your home, community, and agriculture.
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

          {/* Key Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: "40-60%", label: "Water Savings", icon: TrendingDown },
                { value: "500+", label: "Systems Installed", icon: CheckCircle2 },
                { value: "2M+", label: "Liters Collected", icon: Droplets },
                { value: "100%", label: "Natural Source", icon: Leaf },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "For Homes", icon: Home, desc: "Collect runoff from rooftops into storage tanks for gardening, cleaning, and non-potable uses. Simple systems can save 30-50% of household water.", color: "from-blue-500 to-cyan-500" },
              { title: "For Societies", icon: CheckCircle2, desc: "Large scale collection systems to recharge groundwater tables and provide water for common areas, reducing municipal water dependency.", color: "from-cyan-500 to-teal-500" },
              { title: "For Agriculture", icon: Sprout, desc: "Farm ponds and trenches to irrigate crops during dry seasons. Can provide 60-80% of irrigation needs in rain-fed areas.", color: "from-teal-500 to-emerald-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform"
              >
                <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-center mb-8">How it Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Catchment", desc: "Roof surface receives rainfall", icon: CloudRain },
                { step: "2", title: "Transportation", desc: "Pipes and gutters carry water down", icon: Zap },
                { step: "3", title: "Filtration", desc: "First flush and filters remove debris", icon: CheckCircle2 },
                { step: "4", title: "Storage", desc: "Tanks or recharge pits store water", icon: Droplets }
              ].map((s, index) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-center p-6 glass-card rounded-xl hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-white/5 mb-2 absolute top-2 right-2">{s.step}</div>
                  <h4 className="text-lg font-bold text-primary mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { benefit: "Increases groundwater levels", icon: BarChart3 },
                { benefit: "Reduces water bills by 30-50%", icon: TrendingDown },
                { benefit: "Prevents urban flooding", icon: Zap },
                { benefit: "Reduces soil erosion", icon: Leaf },
                { benefit: "Improves water quality", icon: CheckCircle2 },
                { benefit: "Sustainable water supply", icon: Award }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-green-400 w-5 h-5" />
                  </div>
                  <span className="font-medium">{item.benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { location: "Mumbai, India", impact: "500+ households now have year-round water access", icon: Users },
                { location: "Rajasthan, India", impact: "Farmers increased crop yield by 40%", icon: Sprout },
                { location: "California, USA", impact: "Reduced municipal water usage by 35%", icon: CheckCircle2 },
              ].map((story, index) => (
                <div key={story.location} className="p-6 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <story.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-bold text-foreground mb-2">{story.location}</div>
                  <div className="text-sm text-muted-foreground">{story.impact}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
