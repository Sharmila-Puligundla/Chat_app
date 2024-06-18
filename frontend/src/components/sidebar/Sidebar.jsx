import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
const Sidebar = () => {
  return (
    <div  className='border-r border-black p-4 flex flex-col'>
    
      <SearchInput/>
      <div className='divider px-3 ' style={{ borderBottom: '2px solid #900C3F' }} >  </div>
       <Conversations />
       <LogoutButton />
    </div>
  );
};

export default Sidebar;



//Starter code :
// import LogoutButton from './LogoutButton';
// import SearchInput from './SearchInput'
// import Conversations from './Conversations';
// const Sidebar = () => {
//   return (
//     <div  className='border-r border-black p-4 flex flex-col'>
    
//       <SearchInput/>
//       <div className='divider px-3 ' style={{ borderBottom: '2px solid #900C3F' }} >  </div>
//        <Conversations />
//        <LogoutButton />
//     </div>
//   );
// };

// export default Sidebar;
