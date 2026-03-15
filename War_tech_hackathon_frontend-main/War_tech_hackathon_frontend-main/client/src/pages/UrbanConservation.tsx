import { motion } from 'framer-motion';
import { Building2, Droplet, Recycle, Users, Zap, TrendingDown, CheckCircle2, BarChart3, Award, Leaf } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function UrbanConservation() {
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
              <WaterDroplet3D position={[0, 0, 0]} scale={0.5} color="#8b5cf6" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Save Water in Cities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Smart solutions for urban water management and conservation. Cities consume 60% of global water - let's make it sustainable.
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
                { value: "50%", label: "Water Savings", icon: TrendingDown },
                { value: "100+", label: "Cities Engaged", icon: Building2 },
                { value: "5M+", label: "Liters Saved", icon: Droplet },
                { value: "200+", label: "Projects", icon: Award },
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

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-purple-300">Smart Fixtures</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Installing aerators and low-flow fixtures can reduce water consumption by up to 50% without compromising performance. 
                These modern solutions are cost-effective and easy to install.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Low-flow showerheads (saves 40% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Dual-flush toilets (saves 30% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Automatic sensor taps (saves 50% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Water-efficient dishwashers</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Recycle className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Recycle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-blue-300">Greywater Recycling</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Treating and reusing wastewater from sinks, showers, and laundry for non-potable uses. 
                This can reduce freshwater consumption by 30-50% in urban households.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Toilet flushing (saves 30% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Landscape irrigation (saves 40% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Car washing (saves 50% water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Building cooling systems</li>
              </ul>
            </motion.div>
          </div>

          {/* Additional Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Leak Detection", desc: "Smart sensors to detect and fix leaks immediately", icon: Zap, color: "from-yellow-500 to-orange-500" },
              { title: "Water Metering", desc: "Real-time monitoring to track and reduce usage", icon: BarChart3, color: "from-green-500 to-emerald-500" },
              { title: "Green Roofs", desc: "Vegetated roofs that reduce runoff and cool buildings", icon: Leaf, color: "from-teal-500 to-cyan-500" },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl text-center"
          >
            <Users className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold font-heading mb-4">Community Campaigns</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Urban areas can save millions of liters through collective action. Housing societies can implement 
              water metering, fix leakages promptly, and organize awareness drives to encourage responsible usage.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                "Water audit programs",
                "Leak detection workshops",
                "Conservation competitions"
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
