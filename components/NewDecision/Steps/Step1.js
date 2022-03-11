import React, { useEffect } from 'react'
import { TextInput } from './Inputs/TextInput'
import styles from './Steps.module.css'




export const Step1 = ({values1, handleVal1, values1Done, values1DoneNext, handleStep2}) => {      
  useEffect(() => {
    const handleKeyDown = (event) => {    
      if(event.key === 'Enter'){        
          if(values1Done){
            handleStep2();
          }        
      }
    }
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })
  

  return (
    <div className={values1DoneNext ? `${styles.container}` : `${`${styles.container} animate__animated animate__fadeIn animate_faster animate__delay-1s`}`}>

        <h2 className={styles.title}>Step 1</h2>        

        <p className={styles.desc}>Introduce the alternatives for the decision (max. 10)</p>

        <TextInput 
          name='Alternative' 
          min={2} 
          max={10} 
          prevValues={values1}
          isValuesDone={values1Done}
          handleSetValues={handleVal1}          
          handleNext={handleStep2}          
        />

        <button onClick={ values1Done ? handleStep2 : null } className={ values1Done ? `${styles.btn}` : `${styles.btn} ${styles._disabled}` }>Next</button> 

    </div>
  )
}
