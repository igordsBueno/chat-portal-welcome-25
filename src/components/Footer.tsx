
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-chat-blue" />
              <span className="font-bold text-xl">ChatHub</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Modern communication platform for everyone. Connect, collaborate, and chat with ease.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-chat-blue transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChatHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-chat-blue">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-chat-blue">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-chat-blue">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-chat-blue">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
