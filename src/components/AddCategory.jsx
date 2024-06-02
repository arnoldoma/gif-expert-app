import { useState } from 'react';

// https://www.youtube.com/watch?v=0IJc5QaLVs0&list=PLCKuOXG0bPi3x4cAt07EElVqk74hWb9ak&index=68
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( { target } )=>{
        setInputValue(target.value);
    }
    
    const onSubmit = ( event )=>{
        event.preventDefault();
        // Validar que no haya registro en blanco
        if (inputValue.trim().length <=1) return;

        // Recibimos el valor de la categoria del props
        // setCategories( (categories) => [...categories,inputValue]);

        // Limpiarmos el input de espacios en excesos
        onNewCategory( inputValue.trim());
        setInputValue('');
    }
    return (
       <form onSubmit={ (event) => onSubmit(event) }>
         <input
            type="text"
            placeholder='Buscar Categories'
            value={ inputValue }
            onChange={ onInputChange }
        />
       </form>
    )
}
