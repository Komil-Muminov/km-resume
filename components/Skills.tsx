import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Технические Навыки</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Постоянно расширяющийся стек современных технологий, которые я использую для создания производительных приложений.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};