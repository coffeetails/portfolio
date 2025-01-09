import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef } from "react";
import "./photography.css";

export default function Photography() {
    const [photos, setPhotos] = useState([]);
    const imageRefs = useRef([]);
    
    useEffect(() => {
        document.title = 'Kaffekod - Fotografi';
        
        try {
            fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=45ee5e5758f149d9560aff38950ac9d9&photoset_id=72177720322856733&user_id=61048433@N05&format=json&nojsoncallback=1")
            .then(response => response.json())
            .then(resultGallery => {
                console.log("resultGallery: ",resultGallery);
                setPhotos(resultGallery.photoset.photo);
                return resultGallery.photoset.photo;
            })
        } catch (error) {
            console.error("Error fetching images from flickr:", error);
        }

    }, []);
    const displayPhotosSmallish = photos.map((photo: { id: Key | null | undefined; server: any; secret: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index) => {
        // console.log("small photo", photo);
        return (
            <figure key={photo.id+"_s"} className="smallishFigure" ref={el => setRef(el, index)} >
                <img 
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} 
                    //@ts-ignore
                    onClick={() => imageRefs.current[index].scrollIntoView({behavior: 'smooth',block: 'center'})} 
                />
                <figcaption>{photo.title}</figcaption>
            </figure>
        )}
    );

    const setRef = (element: HTMLElement | null, index: number) => {
        if (element) {
            //@ts-ignore
            imageRefs.current[index] = element;
        }
    };


    return (
        <article className="photography">
            <h1>Foton</h1>
            <p>På min fritid så utforskar jag ibland världen igenom kameralinsen, här är lite av vad jag har fångat. Om du vill se mer så finns det på <a href="https://www.flickr.com/people/61048433@N05/">Flickr</a>.</p>
            <button className="toTopButton" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} >➤</button>
            <div className="photoWrapper">
                {displayPhotosSmallish}
            </div>
        </article>
    );
}
