import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef } from "react";
import "./photography.css";

export default function Photography() {
    const [photos, setPhotos] = useState([]);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    
    const openDialog = () => {
        document.body.style.overflowY = "hidden";
        if (dialogRef.current) dialogRef.current.showModal();
    };
    
    const closeDialog = () => {
        document.body.style.overflowY = "scroll";
        if (dialogRef.current) dialogRef.current.close();
      };

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
    
    const displayPhotosSmallish = photos.map((photo: { id: Key | null | undefined; server: any; secret: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <figure key={photo.id} className="smallishFigure">
            <img 
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                onClick={(e) => console.log(photo.id, e)} 
            />
            <figcaption>{photo.title}</figcaption>
        </figure>
    ));

    const displayPhotosLarge = photos.map((photo: { id: Key | null | undefined; server: any; secret: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <figure key={photo.id} className="largeFigure">
            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} />
            <figcaption>{photo.title}</figcaption>
        </figure>
    ));


    return (
        <article className="photography">
            <button id="open" onClick={openDialog}>Open Dialog</button>
            <h1>Foton</h1>
            <p>På min fritid så utforskar jag ibland världen igenom kameralinsen, här är lite av vad jag har fångat.</p>
            <div className="photoWrapper">
                {displayPhotosSmallish}
            </div>


        <dialog id="dialog" ref={dialogRef}>
            <div className="carouselWrapper">
                {displayPhotosLarge}
            </div>
            <button id="close" onClick={closeDialog}> X </button>
        </dialog>

        </article>
    );
}
