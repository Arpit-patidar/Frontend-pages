import { motion } from 'framer-motion';
import { CheckSquare, Bath, Utensils, Droplet, WashingMachine } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export default function HouseholdSteps() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Steps for Households
            </h1>
            <p className="text-xl text-muted-foreground">
              Small changes in our daily habits can make a massive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <Bath className="text-cyan-400" /> Bathroom
              </h2>
              <div className="space-y-4">
                {[
                  { id: "b1", text: "Turn off tap while brushing teeth" },
                  { id: "b2", text: "Take shorter showers (under 5 mins)" },
                  { id: "b3", text: "Fix leaky faucets immediately" },
                  { id: "b4", text: "Install low-flow showerheads" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" onClick={() => toggleCheck(item.id)}>
                    <Checkbox checked={checked[item.id]} onCheckedChange={() => toggleCheck(item.id)} id={item.id} />
                    <label htmlFor={item.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                      {item.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <Utensils className="text-teal-400" /> Kitchen & Laundry
              </h2>
              <div className="space-y-4">
                {[
                  { id: "k1", text: "Wash full loads of laundry only" },
                  { id: "k2", text: "Use a bowl to wash vegetables" },
                  { id: "k3", text: "Don't defrost food under running water" },
                  { id: "k4", text: "Reuse pasta water for plants" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" onClick={() => toggleCheck(item.id)}>
                    <Checkbox checked={checked[item.id]} onCheckedChange={() => toggleCheck(item.id)} id={item.id} />
                    <label htmlFor={item.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                      {item.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl text-center">
             <h2 className="text-2xl font-bold font-heading mb-8">Daily Water Consumption Facts</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Bath, label: "Shower", val: "15-25 Liters/min" },
                  { icon: CheckSquare, label: "Toilet Flush", val: "6-12 Liters" },
                  { icon: WashingMachine, label: "Laundry", val: "50-100 Liters" },
                  { icon: Droplet, label: "Leaky Tap", val: "Up to 20L/day" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                      <stat.icon />
                    </div>
                    <div className="font-bold text-lg">{stat.val}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
