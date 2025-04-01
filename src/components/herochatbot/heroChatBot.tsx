import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Message } from '@/types/types';

const HeroChatbot: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isThinking, setIsThinking] = useState<boolean>(false);

    const preMessages: string[] = [
        "Hey, we can have a conversation about me if you want!",
        "Ask me about my projects!",
        "Want to know what technologies I use? Just ask!",
        "I can tell you more about my skills!",
        "Curious about my experience? I'm here to help!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % preMessages.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage: Message = { sender: 'user', text: userInput };
        setChatHistory([...chatHistory, userMessage]);
        setUserInput('');
        setIsThinking(true);

        setTimeout(() => {
            const botMessage: Message = { sender: 'bot', text: `Great question! Here's some info about ${userInput}` };
            setChatHistory((prev) => [...prev, botMessage]);
            setIsThinking(false);
        }, 2000);
    };

    return (
        <div className="hero-chatbot">
            <motion.div animate={{ y: [0, 15, 0], transition: { duration: 3, repeat: Infinity } }}>
                <Image src={'/images/hero.webp'} width={100} height={100} alt='hero' />
                <div className="speech-bubble">{preMessages[messageIndex]}</div>
            </motion.div>
            <div className="chat-box">
                {chatHistory.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.text}
                    </div>
                ))}
                {isThinking && <div className="bot-message">Thinking...</div>}
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me something!"
                />
            </div>
            <style jsx>{`
        .hero-chatbot {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .speech-bubble {
          background: white;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          color: black;
          margin-bottom: 10px;
        }
        .chat-box {
          width: 250px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }
        .user-message, .bot-message {
          margin: 5px 0;
          padding: 5px;
          border-radius: 5px;
        }
        .user-message {
          background: #007bff;
          align-self: flex-end;
        }
        .bot-message {
          background: #444;
          align-self: flex-start;
        }
        input {
          width: 100%;
          padding: 5px;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
        }
      `}</style>
        </div>
    );
};

export default HeroChatbot;
