import { useEffect, useState } from "react";

const WelcomeMessage = () => {
    const [message, setMessage] = useState("");

        useEffect(() => {
        const currentTime = new Date();
        const hour = currentTime.getHours();
        let newMessage = "";

        if(hour < 12){
            newMessage = "Goedemorgen";
        }else if(hour < 18){
           newMessage = "Goedemiddag"
        }else{
            newMessage = "Goedenacht";
        }

        setMessage(newMessage);
    }, []);
    
    return (
        <section>
            <h2>{message}</h2>
        </section>
    );
}
 
export default WelcomeMessage;