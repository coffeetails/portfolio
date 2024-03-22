import { SetStateAction, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./connect.css";

export default function Connect() {
    const captchaRef = useRef<ReCAPTCHA>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
 
    const submitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setSubmitDisabled(true);
        const captchaToken = captchaRef.current!.getValue();
        emailjs.init({"publicKey": '9liwcYmbKSut2URU9'}); // Public key and user id is the same.
        
        console.log("userName", userName);
        console.log("userEmail", userEmail);
        console.log("message", message);
        console.log("captchaToken", captchaToken);
        
        
        emailjs.send('contact_service', 'template_p5pyw6i', {
            // ...formRef.current!,
            "user_name": userName,
            "user_email": userEmail,
            "message": message,
            "g-recaptcha-response": captchaToken,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                dialogRef.current!.show();
            },
            (error) => {
                console.log('FAILED...', error);
                setSubmitDisabled(false);
            },
        );
        
        captchaRef.current!.reset();
    };
        

    const updateUserName = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUserName(event.target.value);
    };
    const updateUserEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUserEmail(event.target.value);
    };
    const updateMessage = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessage(event.target.value);
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
                <form className="email-form" onSubmit={submitForm}>
                    <label>Namn: </label>
                    <input type="text" name="user_name"  placeholder="John Doe" value={userName} onChange={updateUserName} required  />
                    <label>Email: </label>
                    <input type="email" name="user_email"  placeholder="dinemail@example.com" value={userEmail} onChange={updateUserEmail}  required  />
                    <label>Meddelande: </label>
                    <textarea name="message" placeholder="Hej, vilken spännande portfolio du har! Jag tänkte att..." value={message} onChange={updateMessage}  required ></textarea>
                    <ReCAPTCHA sitekey="6LfjvYwpAAAAAEygXYHHuB1orYfnBZPlq-Ix3pjA" ref={captchaRef} theme="dark" className="captchaEmail" />
                    <input type="submit" value="Skicka" disabled={submitDisabled} />
                </form>

                <dialog ref={dialogRef} className="formSuccessDialog">
                    <p>Tack för ditt meddelande {userName}! Jag svarar så fort jag kan.</p>
                </dialog>
            </section>
        </article>
    );
}