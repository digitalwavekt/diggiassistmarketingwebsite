"use client"
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@/public/menu.svg'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
export default function Header() {
    const [isActive, setActive] = useState(false);

    const HandelToggle = () => {
        setActive(!isActive);
    };
    const pathname = usePathname()
    return (
        <header className='bg-Pcolor sticky top-0 z-50'>
            <nav>
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center text-3xl font-bold text-white capitalize">
                        DiggiAssist 
                    </Link>
                    <button type="button" onClick={HandelToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden">
                        <Image src={MenuIcon} alt='Toggle Menu' />
                    </button>
                    <div className={isActive ? 'w-full lg:w-auto': "hidden lg:block"} >
                        <ul className="flex gap-y-3 flex-col lg:flex-row  gap-x-8 mt-4 lg:mt-0 text-base font-medium capitalize ">
                            <li onClick={HandelToggle}><Link className={pathname == "/" ? "text-Hcolor" : "text-white"} href="/">Home</Link></li>
                            <li onClick={HandelToggle}><Link className={pathname == "/terms-conditions" ? "text-Hcolor" : "text-white"} href="/terms-conditions">terms and conditions</Link></li>
                            <li onClick={HandelToggle}><Link className={pathname == "/privacy-policies" ? "text-Hcolor" : "text-white"} href="/privacy-policies">privacy policies</Link></li>
                            <li onClick={HandelToggle}><Link className={pathname == "/contact" ? "text-Hcolor" : "text-white"} href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
