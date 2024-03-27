import { useEffect } from "react";

export default function Index() {
  
    useEffect(() => {
        document.title = 'Kaffekod - Kodar med kaffe';
    }, []);


    return (
        <article>
            <h2>Hejsan, Monica här!</h2>
            <p>Jag är en handarbetande frontendutvecklare och kattägare i Arvika. Från mig kan du kan förvänta dig många torra skämt, en stor nyfikenhet, mycket omtanke och en liten dos med trams.</p>
            <p>Att utnyttja min erfarenhet som industrielektriker och lagerarbetare ger mig en praktisk erfarenhet som jag kan använda för att skapa webbapplikationer som inte bara uppfyller tekniska krav utan också fokuserar på en förbättrad användarvänlighet och design.</p>
            <h3>Hur jag kom in på programmering</h3>
            <p>Jag började egentligen programmera i tonåren; omkring 2000-2010 när var och varannan hade blogg, inklusive mig. På bloggar kan man som du kanske vet välja bland olika teman och man kunde även hitta custom gjorda. Coolt tyckte jag. Men många använde även dessa.</p>
            <p>Ganska snart upptäckte jag att den där obegripliga texten (HTML & CSS), som temana bestod av, faktiskt gick att justera själv utan att bloggen "brakade ihop". För det mesta så testade jag mig fram men ibland stötte jag på blogginlägg om hur man gör. Detta var en rolig period och jag skaffade mig nytt tema minst en gång i veckan och när jag inte hade nytt tema så gjorde jag massor av små justeringar!</p>
            <p>I gymnasiet, 2011-2014, så valde jag att läsa till elektriker. Så klart fastnar jag för det här med automatik och maskiner, det var spännande hur en hög med kontaktorer och lite annat kunde få en hel fabrik att rulla på i takt för att producera saker.</p>
            <p>Spola fram tiden till 2018 så har jag igen blivit nyfiken på programmering och jag väljer att läsa Programmering 1 & 2, ett par gymnasiekurser. Här lär jag mig väldigt grundläggande C# för att få känna på hur det faktiskt är att programmera och inte bara skriva HTML och CSS som jag tidigare gjort.</p>
            <p>Jag kände direkt: Detta är min grej.</p>
            <p>I 2021 hittade jag en YH-utbildning till Frontendutvecklare. YES! Detta är min väg in till att arbeta som programmerare. Jag spenderade två år på en riktigt bra utbildning med dom bästa klasskamraterna man kan tänka sig och praktikplatserna (som tillsammans var lite mer än en termin) var riktigt givande.</p>
            <p>Nu vet ni hur jag blev programmerare. Det är helt enkelt riktigt roligt – att hitta de bästa lösningarna, frustrationen när man inte förstår varför det inte funkar och euforin när man löser det. Det är som ett pussel och poesi i ett.</p>
        </article>
    );
  }