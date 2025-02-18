import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthProvider';

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuth()

    const login = async (email, password) => {
        const success = handleInputErrors({ email, password })
        if (!success) return;


        setLoading(true);
        try {
            const res = await fetch("http://localhost:4001/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            }
            )
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            toast.success("Login Successful!");
            document.getElementById("my_modal_3").close();
            setTimeout(() => {
                window.location.reload();
                // localStorage.setItem("Users", JSON.stringify(res.data.user));
                localStorage.setItem("Users", JSON.stringify(data))
                setAuthUser(data)
            }, 1000);


        } catch (error) {
            toast.error(error.message)
            setTimeout(() => { }, 1000);
        } finally {
            setLoading(false);
        }
    }
    return { loading, login }
}

export default useLogin;


function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error('Please fill in all fields')
        return false;
    }

    return true;
}
