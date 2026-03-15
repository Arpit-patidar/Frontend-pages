import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Droplets, Calendar, Award, LogOut } from 'lucide-react';
import { useLocation } from 'wouter';

export default function MemberProfile() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h1 className="text-3xl font-bold font-heading">John Doe</h1>
              <p className="text-muted-foreground">Member since Jan 2025 • New York, USA</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">Water Warrior</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">Level 3 Volunteer</span>
              </div>
            </div>
            <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-400" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Water Saved</p>
                <p className="text-2xl font-bold">1,250 Liters</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Events Attended</p>
                <p className="text-2xl font-bold">5 Events</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Impact Score</p>
                <p className="text-2xl font-bold">850 Points</p>
              </div>
            </div>
          </div>

          {/* Activities List */}
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h2 className="text-2xl font-bold font-heading">Recent Activities</h2>
            <div className="space-y-4">
              {[
                { title: "Volunteered at River Cleanup", date: "2 days ago", points: "+50 pts" },
                { title: "Attended Water Conservation Workshop", date: "1 week ago", points: "+30 pts" },
                { title: "Completed Household Checklist", date: "2 weeks ago", points: "+100 pts" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <h4 className="font-bold">{activity.title}</h4>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  <span className="text-primary font-bold">{activity.points}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
