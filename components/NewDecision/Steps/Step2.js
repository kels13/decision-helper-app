import React, { useEffect } from 'react'
import { TextInput } from './Inputs/TextInput'
import styles from './Steps.module.css'

export const Step2 = ({ values2, handleVal2, values2Done, values2DoneNext, handleStep3 }) => {    
  useEffect(() => {
    const handleKeyDown = (event) => {    
      if(event.key === 'Enter'){        
          if(values2Done){
            return handleStep3();
          }        
      }
    }
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })


  return (
    <div className={values2DoneNext  ? `${styles.container}` : `${`${styles.container} animate__animated animate__fadeIn animate_faster`}`}>
        
        <h2 className={styles.title}>Step 2</h2>
        
        <p className={styles.desc}>Introduce the criteria you want keep in mind</p>
        
        <TextInput 
          name='Criterion' 
          min={2} 
          max={40} 
          prevValues={values2}
          isValuesDone={values2Done}
          handleSetValues={handleVal2}          
          handleNext={handleStep3}
        /> 

        <button onClick={ values2Done ? handleStep3 : null } className={ values2Done ? `${styles.btn}` : `${styles.btn} ${styles._disabled}` }>Next</button> 
     
    </div>
  )
}