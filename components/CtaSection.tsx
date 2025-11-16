import React from 'react';

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
              Let's discuss how VIMS Enterprises can help you achieve your growth goals. Book a no-obligation strategy call with our experts today.
            </p>
            <div className="mt-8">
              <button
                onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                className="px-8 py-3 text-base font-bold text-navy bg-light-text hover:bg-slate-200 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
