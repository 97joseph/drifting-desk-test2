
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(127,33,145)] via-[rgb(127,33,145)] to-[rgb(127,33,145)]">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transform Your Business with Our
              <span className="text-white/90"> SaaS Solution</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-10"
            >
              Streamline your workflow, boost productivity, and achieve more with our cutting-edge platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="bg-white text-[rgb(127,33,145)] hover:bg-white/90 px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16"
            >
              <img 
                src="/lovable-uploads/1177e65c-5835-4e31-a98a-ca8cadacb2ab.png"
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
