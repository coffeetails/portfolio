import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef } from "react";
import "./photography.css";

export default function Photography() {
    const [smallPhotos, setSmallPhotos] = useState([]);
    const [largePhotos, setLargePhotos] = useState([]);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const largeImageRefs = useRef([]);
    
    useEffect(() => {
        document.title = 'Kaffekod - Fotografi';
        
        try {
            fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=45ee5e5758f149d9560aff38950ac9d9&photoset_id=72177720322856733&user_id=61048433@N05&format=json&nojsoncallback=1")
            .then(response => response.json())
            .then(resultGallery => {
                setSmallPhotos(resultGallery.photoset.photo);
                return resultGallery.photoset.photo;
            })
            .then(async resultImages => {
                //@ts-ignore
                let newArray = [];
                await Promise.all(resultImages.map((photo: { id: any; }) => {
                    return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=45ee5e5758f149d9560aff38950ac9d9&photo_id=${photo.id}&format=json&nojsoncallback=1`)
                        .then(response => response.json())
                        .then(resultImages => {
                            newArray.push(resultImages.photo);
                        });
                    })
                );
                //@ts-ignore
                newArray.sort((a,b) => new Date(b.dates.taken) - new Date(a.dates.taken));
                //@ts-ignore
                setLargePhotos(newArray);
            });
        } catch (error) {
            console.error("Error fetching images from flickr:", error);
        }

    }, []);
    
    // const openDialog = () => {
    //     document.body.style.overflowY = "hidden"; // Prevent body from scrolling
    //     if (dialogRef.current) {
    //         dialogRef.current.showModal();
    //     }
    // };
    function openDialog(index: number) {
        console.log(index);
        console.log(largeImageRefs.current[index]);
        
        if (largeImageRefs.current[index]) {
            setTimeout(() => {
            }, 50);
        }
        
        document.body.style.overflowY = "hidden"; // Prevent body from scrolling
        if (dialogRef.current) {
            dialogRef.current.showModal();
            largeImageRefs.current[index].scrollIntoView();
        }
    }
    
    const closeDialog = () => {
        document.body.style.overflowY = "scroll";
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };


    const displayPhotosSmallish = smallPhotos.map((photo: { id: Key | null | undefined; server: any; secret: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index) => (
        <figure key={photo.id} className="smallishFigure">
            <img 
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                onClick={() => openDialog(index)}
            />
            <figcaption>{photo.title}</figcaption>
        </figure>
    ));

    const displayPhotosLarge = largePhotos.map((photo: { id: string | undefined; title: any; dates: any; server: any; secret: any; }, index) => (
        <div className="largeFigureWrapper">
            <figure key={photo.id} ref={el => setRef(el, index)} className="largeFigure">
                <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} />
                <figcaption>{photo.title._content} - {photo.dates.taken.slice(0, 10)}</figcaption>
            </figure>
        </div>
    ));

    const setRef = (element: HTMLElement | null, index: number) => {
        if (element) {
            largeImageRefs.current[index] = element;
        }
    };


    return (
        <article className="photography">
            <button id="open" onClick={() => openDialog(0)}>Open Dialog</button>
            <h1>Foton</h1>
            <p>På min fritid så utforskar jag ibland världen igenom kameralinsen, här är lite av vad jag har fångat.</p>
            <div className="photoWrapper">
                {displayPhotosSmallish}
            </div>


            <dialog id="dialog" ref={dialogRef}>
                <div className="carouselWrapper" style={{gridTemplateColumns: `repeat(${displayPhotosLarge.length}, 100%)`}}>
                    {displayPhotosLarge}
                </div>
                <button id="close" onClick={closeDialog}> X </button>
            </dialog>

        </article>
    );
}
