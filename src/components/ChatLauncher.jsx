import React from 'react';

const ChatLauncher = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full 
                 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 
                 flex items-center justify-center p-3 sm:p-4 text-sm font-semibold"
    >
      <img src="https://img.icons8.com/ios-filled/50/ffffff/robot-2.png" alt="AI Chatbot" className="h-6 w-6 sm:h-7 sm:w-7 mr-0 sm:mr-2" />
      <span className="hidden sm:inline">SkillMatch AI</span>
    </button>
  );
};

export default ChatLauncher;