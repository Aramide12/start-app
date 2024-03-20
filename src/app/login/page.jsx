import React from 'react'
import Button from '../files/Button'
import Input from '../files/Input'

export default function Login() {
    return (
    <section className="m-auto w-1/2">
        <form>
            <ul>
                <Input type='text' place='your username' userid='user'/>
                <Input type='password' place='your password' userid='pwd'/>
            </ul>
            <Button status='Log In'/>
        </form>
    </section>
    )
}