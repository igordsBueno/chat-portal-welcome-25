
import React, { useState } from 'react';
import { SendIcon, PaperclipIcon, SmileIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock chat messages data
const chatMessages = [
  {
    id: 1,
    sender: 'John Smith',
    content: 'Hey there! How are you doing today?',
    timestamp: '10:24 AM',
    isUser: false
  },
  {
    id: 2,
    sender: 'You',
    content: "I'm doing great! Just checking out this new chat app.",
    timestamp: '10:26 AM',
    isUser: true
  },
  {
    id: 3,
    sender: 'John Smith',
    content: 'It looks amazing! The interface is so clean and modern.',
    timestamp: '10:27 AM',
    isUser: false
  },
  {
    id: 4,
    sender: 'You',
    content: 'I agree! I love the design and how responsive everything is.',
    timestamp: '10:30 AM',
    isUser: true
  },
  {
    id: 5,
    sender: 'John Smith',
    content: 'Have you tried the group chat feature yet?',
    timestamp: '10:32 AM',
    isUser: false
  }
];

export const ChatArea: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white">
            J
          </div>
          <div>
            <h2 className="font-medium">John Smith</h2>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {chatMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-3 ${msg.isUser ? 'justify-end' : ''}`}
            >
              {!msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-chat-lightPurple flex items-center justify-center text-xs">
                  {msg.sender.charAt(0)}
                </div>
              )}
              
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  msg.isUser 
                    ? 'bg-gradient text-white' 
                    : 'bg-chat-lightPurple'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className={`text-xs ${msg.isUser ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {msg.timestamp}
                </span>
              </div>
              
              {msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-gradient flex items-center justify-center text-xs text-white">
                  Y
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          
          <Input 
            className="rounded-full bg-secondary border-0" 
            placeholder="Type your message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          
          <Button 
            className="bg-chat-blue text-white rounded-full p-2 h-10 w-10"
            onClick={handleSendMessage}
          >
            <SendIcon className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <SmileIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
