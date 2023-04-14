import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import InputField from '@/components/InputField'
import Chat from '@/components/Chat'
import backgorund from '../public/img/background.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <section className='max-w-7xl mx-auto'>
            <Navbar />
            <section className='h-[calc(100vh-100px)] p-5 sm:pb-10'>
                <div className="h-full bg-primary rounded-[40px] p-5 sm:pb-10 flex flex-col justify-end items-center">
                    <div className="w-full max-w-3xl">
                        <div className='flex flex-col gap-5 my-5 max-w-3xl max-h-[72vh] py-20'>
                            <Chat response={true}/>
                            <Chat response={false}/>
                        </div>
                        <InputField />
                    </div>
                </div>
            </section>
        </section>
    )
}
