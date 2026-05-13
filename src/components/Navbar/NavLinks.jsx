const links = [
    { name: "Categories", href: "#" },
    { name: "Deals", href: "#" },
    { name: "What's New", href: "#" },
    { name: "Delivery", href: "#" },
  ];
  
  export default function NavLinks() {
    return (
      <nav className="hidden lg:flex items-center gap-8 mr-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cyan-400 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {link.name}
          </a>
        ))}
      </nav>
    );
  }