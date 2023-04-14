import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import InputField from '@/components/InputField'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const conversation = [
        "Hello there, how can I help you? 😉",
        "What is Artificial Intelligence?",
        "Artificial Intelligence (AI) is intelligence demostrated by machines, as opposed to intelligence of humans and other animals."
    ]

    return (
        <section className={`max-w-7xl mx-auto`}>
            <Navbar />
            <section className='h-[calc(100vh-100px)] p-5 sm:pb-10'>
                <div className="h-full bg-primary bg-opacity-30 border border-white rounded-[40px] p-5 sm:pb-10 flex flex-col justify-end items-center">
                    <div className="w-full max-w-3xl">
                        <div className='flex flex-col gap-5 my-5 max-w-3xl max-h-[72vh] py-10'>
                            <Chat response={true} text={conversation[0]}/>
                            <Chat response={false} text={conversation[1]}/>
                            <Chat response={true} text={conversation[2]}/>
                        </div>
                        <InputField />
                    </div>
                </div>
            </section>
        </section>
    )
}
