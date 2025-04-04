
import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { ChatArea } from '@/components/dashboard/ChatArea';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <ChatArea />
    </div>
  );
};

export default Dashboard;
