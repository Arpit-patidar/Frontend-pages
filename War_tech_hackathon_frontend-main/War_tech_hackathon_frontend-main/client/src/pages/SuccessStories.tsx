import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Quote, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function SuccessStories() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Real impact created by real people. See how communities are transforming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div className="h-48 rounded-xl bg-green-900/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex">
                 <div className="absolute inset-0 flex">
  {/* Before Image */}
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXYnY1EkdSxqH7bYePQWZQzNrEHxuO6x4vg&s"
    alt="Lake Before Cleanup"
    className="w-1/2 h-full object-cover"
  />

  {/* After Image */}
  <img 
    src="https://www.shutterstock.com/shutterstock/videos/11590709/thumb/1.jpg?ip=x480"
    alt="Lake After Cleanup"
    className="w-1/2 h-full object-cover"
  />
</div>
                </div>
                <p className="z-10 font-bold text-white bg-black/50 px-3 py-1 rounded-full text-xs">Lake Revival Project</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2">The Revival of Lake Sarovar</h3>
                <p className="text-muted-foreground text-sm">
                  Once a dumping ground, Lake Sarovar is now a thriving ecosystem thanks to the 6-month cleanup drive by 200+ volunteers. The groundwater levels in the surrounding 5km radius have increased by 2 meters.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-green-400">
                <span>See full case study</span> <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div className="h-48 rounded-xl bg-blue-900/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex">
  {/* Before Image */}
  <img 
    src="https://media.assettype.com/thequint%2F2016-04%2F1b828e6b-d5b4-4e47-b175-0fdcac7b603d%2Fhero.gif?auto=format%2Ccompress&fmt=webp&width=720&w=1200"
    alt="Rampur Dry Season"
    className="w-1/2 h-full object-cover"
  />

  {/* After Image */}
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpQdllcJhczTikojkefsh2VvWnnhf55Xcgw&s"
    alt="Rampur With RWH"
    className="w-1/2 h-full object-cover"
  />
</div>
                <p className="z-10 font-bold text-white bg-black/50 px-3 py-1 rounded-full text-xs">Village Transformation</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2">Self-Sufficient Rampur</h3>
                <p className="text-muted-foreground text-sm">
                  Rampur village faced severe drought every summer. After implementing rooftop rainwater harvesting in every household, the village is now water surplus even during dry months.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                <span>See full case study</span> <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-12">
            <h2 className="text-3xl font-bold font-heading text-center">Community Voices</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sarah J.", role: "Volunteer", text: "Joining Save Aqua changed my perspective on how much water we waste daily. It's empowering to be part of the solution." },
                { name: "Rajesh K.", role: "Farmer", text: "The farm pond initiative helped me save my crops during the delayed monsoon. I am forever grateful." },
                { name: "Anita M.", role: "Teacher", text: "The school workshops are fantastic. My students now scold their parents if they leave the tap running!" }
              ].map((testimonial, i) => (
                <div key={i} className="glass p-6 rounded-2xl relative">
                  <Quote className="absolute top-6 right-6 text-white/10 w-10 h-10" />
                  <p className="text-muted-foreground mb-6 relative z-10 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>

                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
