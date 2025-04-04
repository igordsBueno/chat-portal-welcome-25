
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SendIcon, SmileIcon, PaperclipIcon } from 'lucide-react';

const ChatPreview: React.FC = () => {
  return (
    <Card className="shadow-lg w-full max-w-md mx-auto">
      <CardHeader className="bg-gradient text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="font-bold">JS</span>
          </div>
          <div>
            <h4 className="font-medium">John Smith</h4>
            <p className="text-xs opacity-80">Online now</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-chat-lightPurple flex items-center justify-center text-xs">
              JS
            </div>
            <div className="bg-chat-lightPurple rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Hey there! How are you doing today?</p>
              <span className="text-xs text-muted-foreground">10:24 AM</span>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <div className="bg-gradient text-white rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">I'm doing great! Just checking out this new chat app.</p>
              <span className="text-xs text-white/80">10:26 AM</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient flex items-center justify-center text-xs text-white">
              ME
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-chat-lightPurple flex items-center justify-center text-xs">
              JS
            </div>
            <div className="bg-chat-lightPurple rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">It looks amazing! The interface is so clean and modern.</p>
              <span className="text-xs text-muted-foreground">10:27 AM</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-2 items-center">
          <button className="text-muted-foreground hover:text-chat-blue p-2 rounded-full">
            <PaperclipIcon className="h-5 w-5" />
          </button>
          <Input 
            className="rounded-full bg-secondary border-0" 
            placeholder="Type your message..." 
          />
          <button className="bg-chat-blue text-white p-2 rounded-full">
            <SendIcon className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-chat-blue p-2 rounded-full">
            <SmileIcon className="h-5 w-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatPreview;
