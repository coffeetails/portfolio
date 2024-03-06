import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./connect.css";

export default function Connect() {
    const formRef = useRef();
    const captchaRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const captchaToken = captchaRef.current.getValue();
  
        emailjs.sendForm('contact_service', 'template_p5pyw6i', formRef.current, {
            "publicKey": '9liwcYmbKSut2URU9',
            "g-recaptcha-response": captchaToken,
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );

        captchaRef.current.reset();
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
                <form className="email-form" ref={formRef} onSubmit={sendEmail}>
                    <label>Namn: </label>
                    <input type="text" name="user_name"  placeholder="John Doe" required  />
                    <label>Email: </label>
                    <input type="email" name="user_email"  placeholder="dinemail@example.com" required  />
                    <label>Meddelande: </label>
                    <textarea name="message" placeholder="Hej, vilken spännande portfolio du har! Jag tänkte att..." required ></textarea>
                    <ReCAPTCHA sitekey="6LfjvYwpAAAAAEygXYHHuB1orYfnBZPlq-Ix3pjA" ref={captchaRef} className="captcha" />
                    <input type="submit" value="Skicka" />
                </form>
            </section>
        </article>
    );
}