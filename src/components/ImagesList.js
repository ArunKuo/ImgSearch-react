import './ImagesList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImagesList = (props)=>{
   const images = props.images.map((image)=>{
        return <ImageCard image={image} key={image.id} />
    });

    return (
        <div className="images-list">
            {images}
        </div>
    );
}
export default ImagesList;