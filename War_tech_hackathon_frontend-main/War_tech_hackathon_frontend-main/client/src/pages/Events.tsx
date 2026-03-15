import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Events() {
  const events = [
    {
      title: "World Water Day Symposium",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "City Convention Center",
      type: "Conference",
      status: "Upcoming"
    },
    {
      title: "Community River Cleanup",
      date: "April 05, 2025",
      time: "07:00 AM - 11:00 AM",
      location: "Riverside Park",
      type: "Volunteering",
      status: "Upcoming"
    },
    {
      title: "Water Conservation Workshop",
      date: "February 10, 2025",
      time: "02:00 PM - 05:00 PM",
      location: "Greenwood High School",
      type: "Education",
      status: "Completed"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us at our upcoming gatherings and make a difference.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/30 transition-colors">
                <div className="bg-white/5 p-4 rounded-xl text-center min-w-[100px]">
                  <div className="text-sm text-primary font-bold uppercase tracking-wider">{event.date.split(' ')[0]}</div>
                  <div className="text-3xl font-bold text-foreground">{event.date.split(' ')[1].replace(',', '')}</div>
                  <div className="text-xs text-muted-foreground">{event.date.split(' ')[2]}</div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${event.status === 'Upcoming' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {event.status}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide border border-white/10 px-2 py-0.5 rounded-full">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <Button disabled={event.status === 'Completed'} variant={event.status === 'Completed' ? 'secondary' : 'default'} className="w-full md:w-auto">
                    {event.status === 'Completed' ? 'View Highlights' : 'Register Now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
