
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Globe, Zap, Users, Smile, Clock } from 'lucide-react';

const features = [
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'End-to-End Encryption',
    description: 'All your messages are fully encrypted to ensure your conversations stay private.'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Available Everywhere',
    description: 'Access your chats from any device, anywhere in the world.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Experience real-time messaging with minimal latency.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Group Chats',
    description: 'Create groups with friends, family, or colleagues for team collaboration.'
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: 'Rich Media Sharing',
    description: 'Share photos, videos, documents, and more with a simple drag and drop.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Chat History',
    description: 'Your conversation history is synced and stored securely in the cloud.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why choose <span className="text-gradient">ChatHub</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful features that make our chat platform stand out from the rest.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border border-border/50 hover:border-chat-blue/50 hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center text-chat-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
