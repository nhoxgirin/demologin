"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { login } from '@/backend_fake/be'

function LoginPage() {
    const router = useRouter()
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    function handleLogin() {
        const { username, password } = state
        const res = login(username, password)
        if (res.success) {
            localStorage.setItem('token', res.token)
            router.push("/")
            console.log("da login!")
            //document.location = "/"
        } else {
            console.log(res.message)
        }
    }

    return (
        <div>
            <p>Username</p>
            <input onChange={(e) => {
                setState({
                    ...state,
                    username: e.target.value
                })
            }}
                className='border h-10 w-full' />
            <p>Password</p>
            <input type="password" onChange={(e) => {
                setState({
                    ...state,
                    password: e.target.value
                })
            }}
                className='border h-10 w-full' />
            <button
                onClick={handleLogin}
                className='border rounder-lg bg-black text-white py-2 px-6'
            >LOGIN</button>
        </div>
    )
}

export default LoginPage