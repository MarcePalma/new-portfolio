import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Message } from '@/types/types';

const HeroChatbot: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    const preMessages: string[] = [
        "Hey, we can have a conversation about me if you want!",
        "Ask me about my projects!",
        "Want to know what technologies I use? Just ask!",
        "I can tell you more about my skills!",
        "Curious about my experience? I'm here to help!"
    ];

    /*
        Premessages for About Me section
        
    const messages = [
        "Hey, that's me!",
        "Try clicking on Design!",
        "Click on Coder to see something cool!",
        "Follow me on social media!",
        "Discover more about me in my profile card!",
        "Explore my skills in the profile card!",
        "Learn about my projects in the profile card!",
        "Check out my contact information in the profile card!",
      ]; 
    */

    useEffect(() => {
        if (!isChatOpen) {
            const interval = setInterval(() => {
                setMessageIndex((prevIndex) => (prevIndex + 1) % preMessages.length);
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [isChatOpen]);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage: Message = { sender: 'user', text: userInput };
        setChatHistory([...chatHistory, userMessage]);
        setUserInput('');
        setIsThinking(true);

        try {
            const response = await fetch('/api/dialogflow/route', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userInput }),
            });
            const data = await response.json();
            const botMessage: Message = { sender: 'bot', text: data.response || "I didn't quite get that!" };

            setChatHistory((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching Dialogflow response:", error);
        }

        setIsThinking(false);
    };

    return (
        <div className="hero-chatbot">
            <motion.div
                className="hero-container"
                animate={{ y: [0, 15, 0], transition: { duration: 3, repeat: Infinity } }}
            >
                <Image src={'/images/hero.webp'} width={100} height={100} alt='hero' />
                {!isChatOpen && (
                    <div className="speech-bubble">{preMessages[messageIndex]}</div>
                )}
            </motion.div>

            {isChatOpen && (
                <div className="chat-box">
                    <button className="close-btn" onClick={() => setIsChatOpen(false)}>❌</button>
                    <div className="messages-container">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
                                {msg.text}
                            </div>
                        ))}
                        {isThinking && <div className="bot-message">Thinking...</div>}
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask me something!"
                    />
                </div>
            )}

            {!isChatOpen && (
                <button className="open-chat-btn" onClick={() => setIsChatOpen(true)}>💬</button>
            )}

            <style jsx>{`
                .hero-chatbot {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .speech-bubble {
                    background: white;
                    padding: 10px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    color: black;
                    margin-bottom: 10px;
                    max-width: 250px;
                    overflow: auto;
                    text-align: center;
                }
                .chat-box {
                    width: 320px;
                    max-height: 400px;
                    background: rgba(0, 0, 0, 0.85);
                    color: white;
                    border-radius: 10px;
                    padding: 12px;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
                }
                .messages-container {
                    max-height: 300px;
                    overflow-y: auto;
                    padding-right: 5px;
                }
                .close-btn {
                    align-self: flex-end;
                    background: transparent;
                    border: none;
                    font-size: 18px;
                    color: white;
                    cursor: pointer;
                }
                .open-chat-btn {
                    background: #007bff;
                    color: white;
                    padding: 12px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    transition: transform 0.2s ease-in-out;
                }
                .open-chat-btn:hover {
                    background: #0056b3;
                    transform: scale(1.1);
                }
                .user-message, .bot-message {
                    max-width: 80%;
                    word-wrap: break-word;
                    padding: 8px 12px;
                    border-radius: 10px;
                    margin-bottom: 6px;
                }
                .user-message {
                    background: #007bff;
                    align-self: flex-end;
                    color: white;
                }
                .bot-message {
                    background: #333;
                    align-self: flex-start;
                }
                input {
                    margin-top: 8px;
                    padding: 8px;
                    border-radius: 6px;
                    border: none;
                    width: calc(100% - 16px);
                }
            `}</style>
        </div>
    );
};

export default HeroChatbot;