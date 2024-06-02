export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FJ5vOJQgfyE3iDhYXhEWw0C3gQX0QKSF&q=${ category }&limit=10`;

    const resp = await fetch(url);

    const {data} = await resp.json();
    
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    // console.log(gifs);
    return gifs;

}

// https://www.youtube.com/watch?v=8sxG7EspjHs&list=PLCKuOXG0bPi3x4cAt07EElVqk74hWb9ak&index=74