import React from 'react'
import styles from './TextInput.module.css'

export const TextInputRequired = ({name,pos,values,onChange,onBlur,isDuplicate}) => {
  
    const id = 'val' + pos;
    const prevId = 'val' + (pos-1);
    const focus = ()=>{         
        if(values[prevId]===''){
        document.getElementById(prevId).focus();
        }
    }
    const lockFocus = ()=>{
        document.getElementById(id).focus();
    }
  
    return (
        
        pos===1?
        <>
        {
           values[id]===''? 
            <input 
                type='text'
                placeholder={`${name} 1`}
                className= {styles.textinput}
                onChange={onChange}
                id={id}
                value={values[id]}
                onBlur={isDuplicate? lockFocus:onBlur}
                autoComplete='off'
                autoFocus                 
            /> 
            :        
            <input 
                type='text'
                placeholder={`${name} 1`}
                className= {styles.textinput}
                onChange={onChange}
                id={id}
                value={values[id]}
                onBlur={isDuplicate? lockFocus:onBlur} 
                autoComplete='off'
            />
        }
        </>       
        :
            <input 
                type='text'
                placeholder={`${name} ${pos}`}
                className= {styles.textinput}
                onChange={onChange}
                onBlur={isDuplicate? lockFocus:onBlur}
                id={id}
                value={values[id]}
                onClick= {focus}
                autoComplete='off'
            />           
    )
  }
