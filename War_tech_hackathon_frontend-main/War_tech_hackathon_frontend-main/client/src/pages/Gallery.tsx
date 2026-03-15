import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Play } from "lucide-react";
import riverImg from "../river_cleanup.avif";
import workshopImg from "../school_workshop.jpg";
import schoolImg from "../school.jpeg";
import treeImg from "../tree_plantation.jpg";


export default function Gallery() {
  const images = [
    {
      image: "https://media.istockphoto.com/id/1158162342/photo/woman-hand-picking-up-garbage-plastic-for-cleaning-at-river-with-sunset.jpg?s=612x612&w=0&k=20&c=rzGhf7baKxw7z-X1-MzFcmmE80iq3QHM0JqId74-d9s=",
      title: "River Cleanup 2024",
      size: "col-span-1 row-span-1",
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "School Workshop",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      image: "https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=612x612&w=0&k=20&c=kip26_08vy0zT90x2bA9frWUD6ZEuzPkw8_9uv8cfrw=",
      title: "Tree Plantation",
      size: "col-span-1 row-span-2",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Tm2XJsWiWiehWG3wQeZdzGtsY8qRCXnmfw&s",
      title: "Rainwater Harvesting Setup",
      size: "col-span-1 row-span-1",
    },
    {
      image: "https://c8.alamy.com/comp/G585A2/residents-in-bobo-dioulasso-department-burkina-faso-attend-a-village-G585A2.jpg",
      title: "Community Meeting",
      size: "col-span-1 row-span-1",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyniLY-5UVSbocJlbXwlgWK6fBxQGnvRbPNg&s",
      title: "Awareness Rally",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Mission Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Visual stories from our journey to save water.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-[1200px] md:h-[600px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.size}`}
              >
                {/* Actual image */}
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />

                {/* Dark gradient overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Play icon / overlay content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                </div>

                {/* Title + View Details */}
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {img.title}
                  </h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
