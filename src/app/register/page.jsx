"use client";
import { registerUser } from '../actions/auth/registerUser';

const page = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        const payload = { username, password };

        const result = await registerUser(payload);
        console.log(result)
    }
    return (
        <>
            <form onSubmit={handleRegister} className='space-y-4'>
                <label htmlFor="username" className='block'>
                    username
                </label>
                <input
                className='block p-1 text-black'
                 type="text" 
                 name='username'
                 id='username'
                 placeholder='enter unique username'
                 />
                <label htmlFor="password" className='block'>
                    Password
                </label>
                <input
                className='block p-1 text-black'
                 type="password" 
                 name='password'
                 id='password'
                 placeholder='Password'
                 />
                 <button>
                    Register
                 </button>
            </form>
        </>
    );
};

export default page;