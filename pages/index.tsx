import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import InputField from '@/components/InputField'
import Chat from '@/components/Chat'
import background from '../public/img/background3.png'
import { useState } from 'react'
import React, { useRef, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

async function getBotResponse(message: string, flag: boolean, feedback: string) {
    try {
        const res = await fetch(
            'http://192.168.100.115:8000/chatbot',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "user_message": message,
                    "flag": flag,
                    "user_feedback": feedback
                })
            }
        );

        if(res.ok) {
            const data = await res.json();
            return data;
        }

    } catch(error) {
        console.log('Something Went Wrong!', error);
    }
}

export default function Home() {
    let conversation = [
        {
            response: true,
            message: "Hello there, How can I help you? 😉"
        }
    ]

    let [chats, updateChats] = useState(conversation)
    let [isFeedback, updateFeedback] = useState(false)

    const handleInputChange = async (value : any) => {
        let newChat = {
            response: false,
            message: value
        }
        updateChats([...chats, newChat])
        scrollToBottom();

        console.log(chats);

        let botResponse = undefined;
        if(isFeedback) {
            botResponse = await getBotResponse("", isFeedback, newChat.message);
        } else {
            botResponse = await getBotResponse(newChat.message, isFeedback, "");
        }

        if(botResponse["bot_response"] === "none") {
            let feedbackChat = {
                response: true,
                message: "Sorry, I didn't get 😕. Help me improve by sending possible response for your question."
            }
            await updateChats([...chats, newChat, feedbackChat])
            scrollToBottom();
            updateFeedback(true);
        } else {
            let botChat = {
                response: true,
                message: botResponse["bot_response"]
            }
            await updateChats([...chats, newChat, botChat])
            scrollToBottom();
            updateFeedback(false);
        }
    }

    const chatContainerRef = useRef<HTMLDivElement>(null); // Define type as HTMLDivElement
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chats]);

    return (
        <section className={`max-w-7xl mx-auto`}>
            <div className="background w-screen h-screen absolute top-0 left-0 right-0 bottom-0 -z-10">
                <Image src={background} alt="" className='h-full w-full'/>
            </div>
            <Navbar />
            <section className='h-[calc(100vh-100px)] p-5 sm:pb-10'>
                <div className="h-full bg-primary bg-opacity-30 border border-white rounded-[40px] p-5 sm:pb-10 flex flex-col justify-end items-center">
                    <div className="w-full max-w-3xl">
                        <div ref={chatContainerRef} className='chatscroll flex flex-col gap-5 my-5 max-w-3xl max-h-[70vh] sm:max-h-[66vh] py-10 overflow-y-scroll'>
                            { chats.map((chat, index) => {
                                return <Chat response={chat.response} text={chat.message} />
                            }) }
                        </div>
                        <InputField getInputValue={handleInputChange} />
                    </div>
                </div>
            </section>
        </section>
    )
}
