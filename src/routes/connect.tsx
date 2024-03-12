// import React, { useEffect, useState , useRef } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./connect.css";

export default function Connect() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const captchaRef = useRef<ReCAPTCHA>(null);
    
    const submitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const captchaToken = captchaRef.current!.getValue();
        emailjs.init({"publicKey": '9liwcYmbKSut2URU9'}); // Public key and user id is the same.
        
        emailjs.send('contact_service', 'template_p5pyw6i', {
            // ...formRef.current!,
            "user_name": "userName",
            "user_email": "userEmail",
            "message": "message",
            "g-recaptcha-response": captchaToken,
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );

        captchaRef.current!.reset();
    };


    return (
        <article className="connect">
            <section>
                <p>Kontakta mig här: </p>
                <address className="contact">
                    <a href="mailto:m.bjork95@gmail.com">m.bjork95@gmail.com</a><br />
                    <a href="https://www.linkedin.com/in/monbjo/">Linkedin</a><br />
                    <a href="https://github.com/MonBjo">Github</a>
                </address>
            </section>
                
            <section>
                <p>Eller skicka något direkt till min mail nedan: </p>
                <form className="email-form" ref={formRef} onSubmit={submitForm}>
                    <label>Namn: </label>
                    <input type="text" name="user_name"  placeholder="John Doe" required  />
                    <label>Email: </label>
                    <input type="email" name="user_email"  placeholder="dinemail@example.com" required  />
                    <label>Meddelande: </label>
                    <textarea name="message" placeholder="Hej, vilken spännande portfolio du har! Jag tänkte att..." required ></textarea>
                    <ReCAPTCHA sitekey="6LfjvYwpAAAAAEygXYHHuB1orYfnBZPlq-Ix3pjA" ref={captchaRef} theme="dark" className="captchaEmail" />
                    <input type="submit" value="Skicka" />
                </form>
            </section>
        </article>
    );
}