import { useState } from "react";



export default function useFormInput(initialValue) {

    const[value,setValue]=useState(initialValue);

    const onChangeHandler=(event)=>{
        setValue(event.target.value);

    }

    const resetValue=()=>{
        setValue('')
    }


    return{
        inputProps:{
            value,
            onChange:onChangeHandler
        },
        
        resetValue
        
    };
    
}