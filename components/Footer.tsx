// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Copyright */}
        <p className="text-sm">&copy; {year} Xiao Yuan Lv. All rights reserved.</p>

        {/* Right: Quick Links */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#projects" className="hover:text-teal-500">Projects</a>
          <a href="#contact" className="hover:text-teal-500">Contact</a>
        </div>
      </div>

      
    </footer>
  );
}
