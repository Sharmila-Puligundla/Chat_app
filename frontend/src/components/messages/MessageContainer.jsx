import React from 'react'
import Messages from './Messages';
import { TiMessages} from 'react-icons/ti';
import MessageInput from './MessageInput';
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation ? (<NoChatSelected /> ) : (
            <>
            <div className='  px-4 py-2 mb-2'>
                <span className='text-black label-text'>To:  </span>
                <span className='text-pink-900 font-bold'>{selectedConversation.username}</span>
    
                </div>
             <Messages />
            <MessageInput/>
           
            </>
        )}
      
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser }= useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-pink-900 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋{authUser.username} </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};