import React from 'react'
import styles from './TextInput.module.css'

export const TextInputOptional = ({name,pos,first,values,onChange,onBlur,isDuplicate}) => {

    const id = 'val' + pos;
    const prevId = 'val' + (pos-1)

    const focus = ()=>{
        for (let i = 1; i < pos; i++){
            const prevsId = 'val' + (i)
            if(values[prevsId]===''){
                document.getElementById(prevsId).focus();
                break;
            }
        }     
    }

    const lockFocus = ()=>{
        document.getElementById(id).focus();
    }
  
    return (

        pos===first?
            <input 
                type='text'
                placeholder={`Add ${name.toLowerCase()}`}
                className= {values[id]==='' ? `${styles.textinput} ${styles._add}`:`${styles.textinput}`}
                onChange={onChange}
                onBlur={isDuplicate? lockFocus:onBlur}
                id={id}
                value={values[id]}
                onClick={focus}                
                // disabled={isDuplicate? true:false}
                autoComplete='off' 
            />
        :   
        <>
        {values[prevId]!==''?
            <input 
                type='text'
                placeholder={`Add ${name.toLowerCase()}`}
                className= {values[id]==='' ? `${styles.textinput} ${styles._add}`:`${styles.textinput}`}
                onChange={onChange}
                onBlur={isDuplicate? lockFocus:onBlur}
                id={id}
                value={values[id]}
                autoComplete='off'
            />
        :
            <>{
            values[id]!=='' && 
                <input 
                    type='text'
                    placeholder={`Add ${name.toLowerCase()}`}
                    className= {values[id]==='' ? `${styles.textinput} ${styles._add}`:`${styles.textinput}`}
                    onChange={onChange}
                    onBlur={isDuplicate? lockFocus:onBlur}
                    id={id}
                    value={values[id]}
                    autoComplete='off'
                />
            }</>

        }</>
    )
  }
