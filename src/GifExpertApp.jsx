import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([
        // 'Cumpleaños',
        // 'Two Punch',
        // 'Three Punch'
    ]);

    // Recibo la funcion de la nueva categoria y no muestro abajo en set category
    // const addCategory = ()=>{
    //     setCategories([ 'Nueva Categoria', ...categories]);
    // }

    const onAddCategory = (newCategory) => {

        // Validar que no se retir el nombre de la categoria
        if (categories.includes(newCategory)) {
            alert('Ya existe la categoria!');
            return;
        }
        // console.log(newCategory); 
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/* title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories} 

                // onNewCategory={ (event) => onAddCategory(event) }

                onNewCategory={onAddCategory}
            />

            {/* <button onClick={addCategory}>Agregar</button> */}

            {/* Listado de Gif */}
            <ol>
                {
                    categories.map((category) =>
                    (
                        <div key={category} >
                            {/* <h3>{category}</h3>
                            <li >{category}</li> */}
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        </div>
                    )
                    )
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}
