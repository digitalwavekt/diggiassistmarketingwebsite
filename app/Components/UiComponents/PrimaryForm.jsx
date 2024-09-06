import React from 'react'

export default function PrimaryForm() {
    return (
        <div>
            <h3 className='text-2xl font-semibold text-Tcolor capitalize mb-3 lg:mb-5'>get in touch</h3>
            <form action="#">
                <div className='space-y-5'>
                    <input className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor" type="text" name='yourName' id='yourName' placeholder='Name' />
                    <input className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor" type="email" name='yourEail' id='yourEail' placeholder='Email' />
                    <input className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor" type="text" name='MobileNumber' id='MobileNumber' placeholder='Mobile Number' />
                    <textarea className="bg-gray-50 border border-BorderColor rounded-lg  focus:ring-0 focus:border-Pcolor block w-full h-32 px-5 py-2 font-Manrope text-base text-Tcolor" name="message" id="message" placeholder='Message'></textarea>
                    <button type='submit' className='text-base uppercase font-medium text-white bg-Pcolor rounded-lg px-10 py-4 transition-all hover:text-white hover:bg-Hcolor'>SEND MASSAGE</button>
                </div>
            </form>
        </div>
    )
}
