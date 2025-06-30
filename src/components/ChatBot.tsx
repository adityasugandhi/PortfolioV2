"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMessageCircle, IconX, IconSend, IconRobot, IconUser } from "@tabler/icons-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Greetings! I am Aditya&apos;s AI assistant, here to help you learn about his work in AI engineering and building automation. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare history for API (excluding timestamps)
      const history = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: history
        }),
      });

      const data = await response.json();

      if (response.ok && data.choices && data.choices[0]) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error?.message || 'Failed to get response');
      }
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again later.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full p-4 shadow-lg hover:scale-105 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconMessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-neutral-900 dark:bg-white text-white dark:text-black px-4 py-3 flex items-center gap-3">
              <IconRobot size={20} />
              <div>
                <h3 className="font-semibold text-sm">Aditya&apos;s AI Assistant</h3>
                <p className="text-xs opacity-80">Ask me about Aditya&apos;s work & projects</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center flex-shrink-0">
                      <IconRobot size={16} />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-black'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconUser size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center flex-shrink-0">
                    <IconRobot size={16} />
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 p-4">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Aditya&apos;s projects, skills, or experience..."
                  className="flex-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 text-neutral-900 dark:text-white placeholder-neutral-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg px-3 py-2 hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <IconSend size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};