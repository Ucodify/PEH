import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import axios from 'axios';
import Signup from '../Signup';
import { useNavigate } from 'react-router-dom';
const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setAuthUser } = useAuth()
    const signup = async ({ fullName, email, password, confirmPassword, option, gender }) => {
        const success = handleInputErrors({ fullName, email, password, confirmPassword, option, gender })
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("http://localhost:4001/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, email, password, confirmPassword, option, gender })
            })
            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("Users", JSON.stringify(data));
            setAuthUser(data);
            //Signup();
            toast.success("Signup Successful");
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

export default useSignup;


function handleInputErrors({ fullname, username, password, confirmPassword, option, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !option || !gender) {
        toast.error('Please fill in all fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Passwords donot match')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false
    }
    return true
}

