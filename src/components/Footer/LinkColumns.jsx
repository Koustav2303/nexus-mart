const footerData = [
    {
      title: "Shop",
      links: ["Pro Gaming Rigs", "Wearable Tech", "Mechanical Keyboards", "Cinematic Displays", "New Arrivals"],
    },
    {
      title: "Support",
      links: ["Track Order", "Returns & Refunds", "Warranty Policy", "Contact Us", "FAQ"],
    },
    {
      title: "Company",
      links: ["About Nexus", "Careers", "Press & Media", "Terms of Service", "Privacy Policy"],
    },
  ];
  
  export default function LinkColumns() {
    return (
      <>
        {footerData.map((column, index) => (
          <div key={index} className="col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-wide">{column.title}</h4>
            <ul className="space-y-4">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-cyan-400 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  }