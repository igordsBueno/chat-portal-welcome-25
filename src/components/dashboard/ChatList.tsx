
import React from 'react';
import { MessageSquare } from 'lucide-react';

// Mock data for chat list
const chatListData = [
  {
    id: '1',
    name: 'John Smith',
    lastMessage: 'Hey there! How are you doing today?',
    time: '10:24 AM',
    unread: 2,
    isActive: true
  },
  {
    id: '2',
    name: 'Alice Johnson',
    lastMessage: 'Can you send me those files?',
    time: 'Yesterday',
    unread: 0,
    isActive: false
  },
  {
    id: '3',
    name: 'Team Chat',
    lastMessage: 'Meeting at 3pm today',
    time: 'Monday',
    unread: 0,
    isActive: false
  },
  {
    id: '4',
    name: 'Support Team',
    lastMessage: 'Your ticket has been resolved',
    time: 'Last week',
    unread: 0,
    isActive: false
  }
];

export const ChatList: React.FC = () => {
  return (
    <div className="px-2">
      {chatListData.map((chat) => (
        <div 
          key={chat.id} 
          className={`p-3 mb-1 rounded-lg cursor-pointer flex items-center gap-3 ${
            chat.isActive 
              ? 'bg-accent' 
              : 'hover:bg-muted/50'
          }`}
        >
          <div className="relative">
            {chat.id === '3' ? (
              <div className="w-10 h-10 rounded-full bg-chat-lightPurple flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center text-white">
                {chat.name.charAt(0)}
              </div>
            )}
            
            {chat.unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-chat-blue rounded-full text-white text-xs flex items-center justify-center">
                {chat.unread}
              </span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-sm truncate">{chat.name}</h4>
              <span className="text-xs text-muted-foreground">{chat.time}</span>
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {chat.lastMessage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
