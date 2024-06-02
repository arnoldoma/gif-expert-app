import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs ( category );

    return (
        <>
            <h3>{ category }</h3>
            
            {/* Loading */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {                     
                     images.map( ( image ) => (
                        <GiftItem 
                        key={image.id} 
                        // title={image.title}
                        // url={image.url}
                        // Exparcir los propertis
                        {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

// https://www.youtube.com/watch?v=10dw0mYu1m8&list=PLCKuOXG0bPi3x4cAt07EElVqk74hWb9ak&index=72