import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function JoinUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Application Sent!",
      description: "Thank you for volunteering. We will contact you soon.",
    });
    reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
              Join the Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              Become a volunteer and help us protect our water resources.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-2xl space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" {...register("name", { required: true })} className="bg-white/5 border-white/10 focus:border-primary/50" />
              {errors.name && <span className="text-red-400 text-xs">Name is required</span>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" {...register("email", { required: true })} className="bg-white/5 border-white/10 focus:border-primary/50" />
                {errors.email && <span className="text-red-400 text-xs">Email is required</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 234 567 8900" {...register("phone", { required: true })} className="bg-white/5 border-white/10 focus:border-primary/50" />
                {errors.phone && <span className="text-red-400 text-xs">Phone is required</span>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (City)</Label>
              <Input id="location" placeholder="New York" {...register("location", { required: true })} className="bg-white/5 border-white/10 focus:border-primary/50" />
              {errors.location && <span className="text-red-400 text-xs">Location is required</span>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Why do you want to join?</Label>
              <Textarea id="reason" placeholder="I want to make a difference because..." {...register("reason", { required: true })} className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[100px]" />
              {errors.reason && <span className="text-red-400 text-xs">Please tell us your reason</span>}
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}
