import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function MissionActivities() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Mission Activities
            </h1>
            <p className="text-xl text-muted-foreground">
              Our ongoing initiatives to save water and educate communities.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "River Cleanup Drive",
                date: "Weekly",
                location: "Yamuna River Banks",
                desc: "Volunteers gather every weekend to remove plastic waste and debris from the river banks to prevent water pollution.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v8MnvJgTA2wuhQNJDg4lSGRVOlc-cOdtZw&s"
              },
              {
                title: "School Awareness Workshops",
                date: "Monthly",
                location: "City Schools",
                desc: "Interactive sessions with students to teach them about the importance of water conservation through games and presentations.",
                image:
                  "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                title: "Tree Plantation for Groundwater",
                date: "Seasonal",
                location: "Rural Outskirts",
                desc: "Planting native trees that help in soil moisture retention and groundwater recharge during the monsoon season.",
                image:
                  "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-0 rounded-2xl overflow-hidden flex flex-col md:flex-row group"
              >
                {/* Image section */}
                <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Text section */}
                <div className="p-8 flex-1 space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-primary font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {activity.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {activity.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground">{activity.desc}</p>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent hover:text-primary justify-start"
                  >
                    Volunteer for this <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
