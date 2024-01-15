    import React, { useState } from 'react';
    import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
    import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
    import MailOutlineIcon from '@mui/icons-material/MailOutline';
    import { userContact } from '../../../../services/userContact';


    const Contact = () => {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await userContact(email,subject,message);
        
        setEmail('');
        setSubject('');
        setMessage('');
    };

        return(
            <>
            <AlphaNavbar />
            <section class="bg-[#392A6D]">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className=' flex text-xl gap-3 items-center mb-8'>   
                        <MailOutlineIcon fontSize='large'  className=' text-xl text-gray-100 '/>
                        <h2 class=" text-3xl tracking-tight font-extrabold text-left  text-white">Contact Us</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-200">Your Mail</label>
                            <input required type="email" id="email"  onChange={(e) => setEmail(e.target.value)}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder:opacity-70 "  ></input>
                        </div>
                        <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-200">Subject</label>
                            <input required type="text" id="subject" onChange={(e) => setSubject(e.target.value)} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder:opacity-70" ></input>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-200">Your message</label>
                            <textarea required id="message" onChange={(e) => setMessage(e.target.value)} rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  bg-slate-100 " placeholder="Write your reason..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-800 rounded-md bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-gray-50 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
            <AlphaFooter />
            </>
        )
    }
    export default Contact;