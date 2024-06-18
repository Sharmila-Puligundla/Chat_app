import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
const Login = () => {

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
          const {loading,login} =useLogin();

      const handleSubmit =async(e) =>{
        e.preventDefault();
        await login(username,password)
      };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

    <div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        <span className='text-pink-900'> ChatApp </span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-pink-900'>
                        Username
                    </span>
                    
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                
                /> 
            </div>
<div>
<label className='label'>
                    <span className='text-base label-text text-pink-900'>
                        Password
                    </span>
</label>
<input
			type='password' placeholder='Enter Password' className="input input-bordered input-secondary w-full max-w-xs"
							
            value={password}
            onChange={(e) => setPassword(e.target.value)}


/>
</div>
    <div>
    <Link to='/signup'  className='text-gray-100 hover:underline hover:text-black-600 mt-2 inline-block'>
						{"Don't"} have an account?
	</Link>

    <div>
    <button className='btn btn-block btn-sm mt-2' disabled={loading} >
    {loading ? <span className='loading loading-spinner '></span> : "Login"}
         </button>
    </div>
    </div>

            </form>

  </div>
  </div>
  )
};

export default Login;
