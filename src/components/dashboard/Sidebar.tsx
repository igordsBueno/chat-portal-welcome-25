
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageSquare, 
  Search, 
  Settings, 
  PlusCircle, 
  Users, 
  Inbox, 
  LogOut 
} from 'lucide-react';
import { ChatList } from './ChatList';

export const Sidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-80 border-r bg-muted/10 flex flex-col h-full">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-chat-blue" />
          <span className="font-bold text-lg">ChatHub</span>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <Button className="w-full bg-gradient text-white hover:opacity-90 justify-start gap-2">
          <PlusCircle className="h-5 w-5" />
          New Chat
        </Button>
      </div>
      
      <div className="px-4 mb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background"
          />
        </div>
      </div>
      
      <div className="flex px-4 py-2">
        <Button variant="ghost" className="flex-1 justify-start" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          Chats
        </Button>
        <Button variant="ghost" className="flex-1 justify-start" size="sm">
          <Users className="h-4 w-4 mr-2" />
          Contacts
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <ChatList />
      </ScrollArea>
      
      <div className="mt-auto border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div>
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
