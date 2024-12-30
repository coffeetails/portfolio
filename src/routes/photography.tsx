import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

export default function Photography() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        document.title = 'Kaffekod - Fotografi';
        
       const fetchData = async () => {
            try {
                const response = await fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=45ee5e5758f149d9560aff38950ac9d9&photoset_id=72177720322856733&user_id=61048433@N05&format=json&nojsoncallback=1");
                const result = await response.json();
                console.log("result",result.photoset.photo);
                setPhotos(result.photoset.photo);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    
    const displayPhotos = photos.map((photo: { id: Key | null | undefined; server: any; secret: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <figure key={photo.id} style={{marginTop: 24, padding: 8, borderBottom: "1px solid gray"}}>
            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
            <figcaption>{photo.title}</figcaption>
        </figure>
    ))

    return (
        <article className="photography">
            <h1>Foton</h1>
            <p>På fritiden så brukar jag ibland utforska världen igenom kameralinsen.</p>
            <div className="photoWrapper">
                {displayPhotos}
            </div>
        </article>
    );
}
