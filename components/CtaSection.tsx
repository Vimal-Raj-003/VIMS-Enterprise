import React from 'react';

import { motion } from 'motion/react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-cyan to-violet rounded-4xl p-8 md:p-16 text-center overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-violet/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200">
              Let's discuss how VIMS can help you achieve your growth goals. Book a no-obligation strategy call with our experts today.
            </p>
            <div className="mt-8">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px 5px rgba(34, 211, 238, 0.3)",
                  letterSpacing: "0.05em"
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                className="px-10 py-4 text-base font-bold text-navy bg-light-text rounded-full shadow-2xl transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Book Strategy Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/20 to-cyan/0 -translate-x-full group-hover/btn:animate-shimmer"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
