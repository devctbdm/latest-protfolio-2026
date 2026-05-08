import { Folder, Rocket, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import ImageCom from './ImageCom';

function HeroProjects() {
  return (
    <section className="pt-32 pb-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-indigo-500 mb-2">PROJECTS</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Things I’ve <span className="text-indigo-500">Built</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Each project helped me grow and solve real-world problems.
        </p>

        <div className="flex gap-6 mt-6 text-sm text-gray-400">
          <div className="flex items-center gap-x-3">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Folder size={18} color="#6366f1" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <p className="text-white font-bold">30+</p>
                <p>Projects</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Rocket size={18} color="#6366f1" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-white font-bold">5+</p>
              <p>Live</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Trophy size={18} color="#6366f1" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-white font-bold">100%</p>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </motion.div>

      <ImageCom />
    </section>
  );
}

export default HeroProjects;
