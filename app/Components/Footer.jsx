import Link from 'next/link'
import React from 'react'
import { FaFacebookF,FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className='bg-Tcolor'>
      <div className="container px-4 mx-auto">
        <div className="py-10 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <Link href="/" className="flex items-center text-3xl font-bold text-white capitalize"> DiggiAssist</Link>
              <p className='mt-5 md:mt-7 text-white'>DiggiAssist is a door to door service provider application , which connect service experts to user at their door step with taking care </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-white capitalize mb-5 md:mb-7'>Navigation</h3>
              <ul className='text-base text-white space-y-2'>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Pricing</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Features</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Blog</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-white capitalize mb-5 md:mb-7'>Services</h3>
              <ul className='text-base text-white space-y-2'>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Team</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Collaboration</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Todos</Link></li>
                <li><Link className='transition-all hover:text-Pcolor' href="/">Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-white capitalize mb-5 md:mb-7'>Downloads</h3>
              <ul className='text-base text-white space-y-2'>
                <li><a target='_blank' className='transition-all hover:text-Pcolor' href="/">Get from the App Store</a></li>
                <li><a target='_blank' className='transition-all hover:text-Pcolor' href="/">Get from the Play Store</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className='text-center md:text-start'>
              <p className='text-white'>&copy; Copyright <Link href="/">DiggiAssist</Link>. All Rights Reserved Designed by Yogesh Kumar Saini</p>
            </div>
            <div>
              <ul className='flex justify-center md:justify-end items-center gap-x-3'>
                <li><a href="https://www.facebook.com/profile.php?id=61564646243667" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaFacebookF /></a></li>
                <li><a href="https://www.instagram.com/diggiassist/" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/company/diggiassist/about/?viewAsMember=true" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaLinkedinIn /></a></li>
                <li><a href="https://x.com/AssistDigg54204" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaTwitter /></a></li>
                <li><a href="https://www.youtube.com/@DiggiAssist-i1u" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaYoutube /></a></li>
                <li><a href="https://www.pinterest.com/diggiassist/" target='_blank' className='w-10 h-10 rounded-full border border-white inline-flex justify-center items-center text-xl font-semibold text-white transition-all hover:bg-Pcolor hover:border-Pcolor'><FaPinterestP /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
