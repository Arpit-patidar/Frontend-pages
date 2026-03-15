import { motion } from 'framer-motion';
import { Droplets, Factory, Trash2, Skull, AlertTriangle, Fish, Waves, Shield, TrendingDown, CheckCircle2, Activity } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WaterDroplet3D } from '@/components/WaterDroplet3D';

export default function PollutionInfo() {
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
              <WaterDroplet3D position={[0, 0, 0]} scale={0.5} color="#ef4444" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Water Pollution Crisis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the silent killer of our ecosystems and how we can stop it. Every year, millions of tons of waste contaminate our water sources, threatening life on Earth.
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
          {/* Statistics Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border-l-4 border-red-500"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">The Alarming Reality</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-400 mb-2">8M+</div>
                    <div className="text-muted-foreground">Tons of plastic dumped annually</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">2.2B</div>
                    <div className="text-muted-foreground">People lack safe drinking water</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">80%</div>
                    <div className="text-muted-foreground">Of wastewater untreated globally</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl space-y-6 hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold font-heading flex items-center gap-3">
                <Factory className="text-red-400 w-8 h-8" /> Major Causes
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Industrial Waste:</strong> Factories dumping untreated chemicals, heavy metals, and toxic substances directly into rivers and oceans.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Sewage & Wastewater:</strong> Billions of gallons of untreated domestic and municipal sewage released into water bodies daily.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Marine Dumping:</strong> Garbage, including millions of tons of plastics, dumped into oceans, creating massive garbage patches.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Agricultural Runoff:</strong> Pesticides, fertilizers, and animal waste washing into rivers and groundwater.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Oil Spills:</strong> Accidental and intentional oil spills contaminating vast ocean areas.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl space-y-6 hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold font-heading flex items-center gap-3">
                <Skull className="text-orange-400 w-8 h-8" /> Devastating Effects
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Human Health:</strong> Waterborne diseases like Cholera, Typhoid, Dysentery, and Hepatitis affecting millions annually.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Ecosystem Destruction:</strong> Mass death of aquatic animals, destruction of coral reefs, and loss of biodiversity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Eutrophication:</strong> Algae blooms that deplete oxygen, creating dead zones where no life can survive.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Food Chain Contamination:</strong> Toxins accumulating in fish and seafood, posing health risks to humans.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span><strong className="text-foreground">Economic Impact:</strong> Billions lost in tourism, fishing industries, and healthcare costs.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Prevention Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl border-l-4 border-primary"
          >
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <Shield className="text-primary w-8 h-8" /> Prevention & Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { step: "Proper Waste Disposal", desc: "Separate and recycle waste properly" },
                { step: "Reduce Plastic Usage", desc: "Use reusable alternatives" },
                { step: "Treat Industrial Effluents", desc: "Implement wastewater treatment" },
                { step: "Use Eco-friendly Products", desc: "Choose biodegradable options" },
                { step: "Conserve Water", desc: "Reduce daily water consumption" },
                { step: "Report Illegal Dumping", desc: "Report violations to authorities" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-sm font-medium block mb-1">{item.step}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold font-heading text-center">What We're Doing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Waves, title: "River Cleanups", desc: "Organizing regular cleanup drives in polluted rivers", count: "200+ Events" },
                { icon: Fish, title: "Marine Protection", desc: "Protecting ocean ecosystems from plastic pollution", count: "50+ Projects" },
                { icon: Activity, title: "Awareness Campaigns", desc: "Educating communities about pollution prevention", count: "10K+ Reached" },
              ].map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{action.desc}</p>
                  <div className="text-primary font-semibold">{action.count}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold font-heading">Our Impact</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Tons Removed", icon: Trash2 },
                { value: "200+", label: "Cleanup Events", icon: Activity },
                { value: "50+", label: "Rivers Cleaned", icon: Waves },
                { value: "10K+", label: "People Educated", icon: CheckCircle2 },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
