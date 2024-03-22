import { useEffect } from "react";

export default function Index() {
  
    useEffect(() => {
        document.title = 'Kaffekod - Kodar med kaffe';
    }, []);


    return (
        <p>Att utnyttja min erfarenhet som industrielektriker och lagerarbetare ger mig en praktisk erfarenhet som jag kan använda för att skapa webbapplikationer som inte bara uppfyller tekniska krav utan också fokuserar på en förbättrad användarvänlighet och design.</p>
    );
  }