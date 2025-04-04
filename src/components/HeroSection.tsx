
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ChatPreview from './ChatPreview';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-10 md:pt-20 pb-16 md:pb-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-chat-blue font-medium text-sm">
            Connect with confidence
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Modern chat platform for <span className="text-gradient">everyone</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Experience seamless communication with our intuitive chat platform. Connect with friends, collaborate with colleagues, or build communities — all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gradient text-white hover:opacity-90 shadow-glow">
              Start chatting now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline">
              View demo
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">500+</span> people joined this week
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient rounded-full w-64 h-64 absolute -z-10 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="animate-float">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
