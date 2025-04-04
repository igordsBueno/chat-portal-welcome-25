
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-chat-blue" />
          <span className="font-bold text-xl">ChatHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-chat-blue transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-chat-blue transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-chat-blue transition-colors">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-chat-blue text-chat-blue hover:bg-chat-blue hover:text-white" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="bg-gradient text-white hover:opacity-90" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
