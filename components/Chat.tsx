const Chat = ({response, text}: any) => {
    return (
        <div className={`flex ${response ? '' : 'flex-row-reverse'} items-end gap-2`}>
            <div className={`profile shadow-2xl rounded-full w-10 h-10 bg-white border ${response ? 'border-primaryGreen' : 'border-primaryPurple'} grid place-content-center`}>
                <p className="text-lg">{response ? '🤖' :  '🧑🏻‍🦱'}</p>
            </div>
            <div className={`message shadow-2xl rounded-3xl ${response ? 'bg-primaryGreen' : 'bg-primaryPurple text-white'} text-sm sm:text-base p-4 px-5 max-w-[200px] sm:max-w-[400px]`}>
                <p>{text}</p>
            </div>
        </div>
    );
}
 
export default Chat;