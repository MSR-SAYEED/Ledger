import React from 'react';
import { footerLinks } from '../../public/data/FooterLinks';



const Footer = () => {
  return (
    <footer className="bg-[#f7f9fb] px-6 py-16 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          <div className="flex flex-col gap-y-6">
            <h2 className="text-[20px] font-bold text-[#1A1C1E]">Authority Ledger</h2>
            <p className="max-w-[280px] text-[16px] leading-[26px] text-[#667085]">
              The premier choice for high-growth enterprise marketing and digital architecture.
            </p>
          </div>

          
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-y-6">
              <h3 className="text-[18px] font-bold text-[#1A1C1E]">{section.title}</h3>
              <ul className="flex flex-col gap-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[16px] text-[#667085] transition-colors hover:text-black"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="mt-20 border-t border-[#EAECF0] pt-8">
          <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
            <p className="text-[14px] text-[#667085]">
              © 2024 Authority Ledger. All rights reserved.
            </p>
            <div className="flex gap-x-8">
              <a href="#" className="text-[14px] text-[#667085] underline-offset-4 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-[14px] text-[#667085] underline-offset-4 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;