import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import * as emailjs from "emailjs-com";
import "./connect.css";

export default function Connect() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact_service', 'template_p5pyw6i', form.current, {
            publicKey: '9liwcYmbKSut2URU9',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <article className="connect">
            <section>
                <p>Kontakta mig här: </p>
                <address className="contact">
                    <a href="mailto:m.bjork95@gmail.com">m.bjork95@gmail.com</a><br />
                    {/* <a href="tel:+46709667534">+46 709 66 75 24</a><br /> */}
                    <a href="https://www.linkedin.com/in/monbjo/">Linkedin</a><br />
                    <a href="https://github.com/MonBjo">Github</a>
                </address>
            </section>
                
            <section>
                <p>Eller skicka något direkt till min mail nedan: </p>
                {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> */}
                <form className="email-form" ref={form} onSubmit={sendEmail}>
                    <label>Namn: </label>
                    <input type="text" name="user_name"  placeholder="John Doe" />
                    <label>Email: </label>
                    <input type="email" name="user_email"  placeholder="dinemail@example.com" />
                    <label>Meddelande: </label>
                    <textarea name="message" placeholder="Hej, vilken spännande portfolio du har! Jag tänkte att..."></textarea>
                    <input type="submit" value="Skicka" />
                </form>
            </section>
        </article>
    );
}