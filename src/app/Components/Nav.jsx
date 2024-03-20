import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
           <ul className='flex justify-between p-8 bg-slate-900 text-white'>
            <li>
                <Link href='/'>home</Link>
            </li>
            <li>
                <Link href='/login'>log in</Link>
            </li>
            <li>
                <Link href='/signup'>sign up</Link>
            </li>
            <li>
                <Link href='/contactus'>contact us</Link>
            </li>
           </ul>
        </nav>
    )
}