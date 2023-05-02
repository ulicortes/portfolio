import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u4f9f1i', 'template_joy3gol', form.current, '2NUmxUEL8NXMg_auo')
            .then((result) => {
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    };
    return <div className="page center">
        <div>
            <h1>Contact me!</h1>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type='text' name="user_name" required />
                </div>
                <div>
                    <label>Surname</label>
                    <input type='text' name="user_surname" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name="user_email" required />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea name="message" required />
                </div>
                <button type="submit" id='button-send'><span>Send</span></button>
            </form>
        </div>
    </div>
}