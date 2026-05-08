import { motion } from 'motion/react';

const CodeBlock = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
    >
      {/* Code Card */}
      <motion.div className="bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-white/5">
        <motion.div
          className="bg-slate-900 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Terminal Header */}
          <motion.div className="bg-gray-800/50 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              {['red', 'yellow', 'green'].map((color, index) => (
                <motion.div
                  key={color}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.25 + index * 0.08,
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={`w-3 h-3 rounded-full ${
                    color === 'red'
                      ? 'bg-red-500'
                      : color === 'yellow'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                  }`}
                />
              ))}
            </div>
            <motion.div className="flex-1 text-center">
              <span className="text-gray-400 text-xs font-mono">terminal</span>
            </motion.div>
          </motion.div>

          {/* Code Content */}
          <motion.div
            className="bg-slate-900 p-4 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Line Numbers */}
            <motion.div
              className="text-gray-500 text-sm font-mono pr-4 select-none border-r border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="leading-6">
                  {num}
                </div>
              ))}
            </motion.div>

            {/* Code Lines - Staggered animation */}
            <motion.div
              className="text-sm font-mono pl-4 space-y-0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              >
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = {'{'}
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              >
                {'  '}
                <span className="text-green-400">name</span>:{' '}
                <span className="text-orange-400">&apos;Minarul&apos;</span>,
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              >
                {'  '}
                <span className="text-green-400 mt-3">role</span>:{' '}
                <span className="text-orange-400">&apos;Full Stack Developer&apos;</span>,
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              >
                {'  '}
                <span className="text-green-400 mt-3">skills</span>: [
                <span className="text-orange-400">&apos;Next.js&apos;</span>,{' '}
                <span className="text-orange-400">&apos;Node.js&apos;</span>,{' '}
                <span className="text-orange-400">&apos;MongoDB&apos;</span>]
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
              >
                {'}'}
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
                className="mt-3"
              >
                <span className="text-yellow-400 ">console</span>.
                <span className="text-blue-400">log</span>(developer)
              </motion.div>
              <motion.div
                className="text-gray-500 mt-7"
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {"// Let's build something amazing together 🚀"}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CodeBlock;
