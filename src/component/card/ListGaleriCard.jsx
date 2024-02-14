import React from "react";
import GaleriCard from "./GaleriCard";

async function getImages() {
    const response = await fetch("/api/images");
    const data = await response.json();
    return data.images.slice(0, 5);
}

const [images, setImages] = useState([]);

useEffect(() => {
    getImages().then((data) => setImages(data));
}, []);

function ListGaleriCard() {
    return (
        <div>
            {images.map((image) => (
                <GaleriCard
                key={image.id}
                image={image.url}
                title={image.title}
                description={image.description}
                />
            ))}
        </div>
    );
}

export default ListGaleriCard;
