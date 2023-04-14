import { useState } from "react";
import sendIcon from '../public/icons/sendicon.png';
import Image from "next/image";

const InputField = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex align-center gap-2 justify-center">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    value={inputValue}
                    onChange={handleChange}
                    className="h-12 w-full max-w-3xl text-sm sm:text-base px-5 rounded-full bg-white bg-opacity-50 border border-white focus:border-primaryPurple transition-all duration-100 ease-in focus:outline-none hover:shadow-2xl focus:shadow-2xl" 
                />
                <button
                    disabled={inputValue === ''}
                    type="submit"
                    className="rounded-full bg-primaryPurple bg-opacity-80 hover:bg-opacity-100 disabled:opacity-50 hover:shadow-2xl focus:shadow-2xl transition-all duration-100 ease-in h-12 w-14 sm:w-20 px-4 flex items-center justify-center">
                    <Image src={sendIcon} alt="logo" width={20} height={20} />
                </button>
            </form>
        </div>
    );
}
 
export default InputField;