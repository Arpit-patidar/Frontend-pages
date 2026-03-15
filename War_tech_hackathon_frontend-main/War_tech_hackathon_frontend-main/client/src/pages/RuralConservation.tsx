import { motion } from 'framer-motion';
import { Wheat, Droplets, Mountain, Tractor, TrendingUp, Award, Users, CheckCircle2, BarChart3, Leaf } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function RuralConservation() {
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
              <WaterDroplet3D position={[0, 0, 0]} scale={0.5} color="#10b981" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Save Water in Villages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Traditional and modern techniques to sustain rural livelihoods and agriculture. Empowering communities with sustainable water solutions.
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

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: "60%", label: "Water Saved", icon: TrendingUp },
                { value: "200+", label: "Villages", icon: Mountain },
                { value: "10M+", label: "Liters Collected", icon: Droplets },
                { value: "500+", label: "Farmers Helped", icon: Users },
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
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="glass-card p-6 rounded-2xl space-y-4 border-t-4 border-green-500 hover:scale-105 transition-transform"
            >
              <div className="p-3 bg-green-500/10 w-fit rounded-lg text-green-400">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading">Check Dams</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Small barriers built across the direction of water flow on shallow rivers and streams for harvesting water. 
                These structures help in groundwater recharge and provide water for irrigation.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Low cost solution</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-6 rounded-2xl space-y-4 border-t-4 border-emerald-500 hover:scale-105 transition-transform"
            >
              <div className="p-3 bg-emerald-500/10 w-fit rounded-lg text-emerald-400">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading">Farm Ponds</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dug out areas on the farm to collect runoff water from rainfall, which can be used for irrigation during dry spells. 
                Can store 50,000-500,000 liters depending on size.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>High storage capacity</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-card p-6 rounded-2xl space-y-4 border-t-4 border-teal-500 hover:scale-105 transition-transform"
            >
              <div className="p-3 bg-teal-500/10 w-fit rounded-lg text-teal-400">
                <Tractor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading">Drip Irrigation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Watering plants drop by drop near the roots, minimizing evaporation and saving up to 60% of water. 
                Increases crop yield by 20-30% while using less water.
              </p>
              <div className="flex items-center gap-2 text-teal-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>60% water savings</span>
              </div>
            </motion.div>
          </div>

          {/* Additional Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Contour Bunding", desc: "Building ridges along slopes to capture rainwater", icon: Mountain, color: "from-green-500 to-emerald-500" },
              { title: "Mulching", desc: "Covering soil to reduce evaporation", icon: Leaf, color: "from-emerald-500 to-teal-500" },
              { title: "Crop Rotation", desc: "Growing water-efficient crops in rotation", icon: Wheat, color: "from-teal-500 to-cyan-500" },
            ].map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-br ${technique.color} flex items-center justify-center`}>
                  <technique.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{technique.title}</h3>
                <p className="text-sm text-muted-foreground">{technique.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-center glass p-8 rounded-2xl"
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold font-heading">Groundwater Recharge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Reviving dried-up borewells and aquifers using recharge shafts and percolation pits. 
                This ensures water availability even during summer months and improves the quality of groundwater.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "Recharge shafts",
                  "Percolation pits",
                  "Soak pits",
                  "Borewell recharge"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl flex items-center justify-center border border-white/10">
              <Wheat className="w-16 h-16 text-green-400/50" />
            </div>
          </motion.div>

          {/* Success Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold font-heading">Rural Impact</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "40%", desc: "Increase in crop yield", icon: TrendingUp },
                { metric: "60%", desc: "Reduction in water usage", icon: Droplets },
                { metric: "80%", desc: "Farmers reporting better income", icon: Award },
              ].map((impact, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <impact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold font-heading text-primary mb-2">{impact.metric}</div>
                  <div className="text-sm text-muted-foreground">{impact.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
