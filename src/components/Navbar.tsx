
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[rgb(127,33,145)] via-[rgb(127,33,145)] to-[rgb(127,33,145)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">SaaS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/users" className="text-white/90 hover:text-white transition-colors">
              Users
            </Link>
            <Link to="/posts" className="text-white/90 hover:text-white transition-colors">
              Posts
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-white hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-white text-[rgb(127,33,145)] hover:bg-white/90">
              Get Started
            </Button>
            <Button className="bg-[#F2FCE2] text-[rgb(127,33,145)] hover:bg-[#F2FCE2]/90">
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
