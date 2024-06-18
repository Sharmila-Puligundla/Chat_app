
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from "../../context/SocketContext";


const Conversation = ({ conversation,  lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
    
  
  
  
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-pink-900 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-pink-900" : ""}
      
      `}
      onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>
      
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-900'>
             {conversation.username}
            </p>
            <span className='text-xl text-gray-900'>...</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider  my-0 py-0 h-1 ' />}
    </>
  );
};

export default Conversation;






//Starter code :
// import React from 'react';

// const Conversation = () => {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-pink-900 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img 
//               src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' 
//               alt='User avatar'
//             />
//           </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-900'>
//               Sharmila-Puligundla
//             </p>
//             <span className='text-xl'>😶‍🌫️</span>
//           </div>
//         </div>
//       </div>
//       <div className='divider my-0 py-0 h-1' style={{ borderBottom: '2px solid #900C3F' }}></div>
//     </>
//   );
// };

// export default Conversation;
