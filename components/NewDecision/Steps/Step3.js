import React, { useEffect, useState } from 'react'
import { ValueInput } from './Inputs/ValueInput'
import styles from './Steps.module.css'

export const Step3 = ({values2, values3, handleVal3, values3Done, values3DoneNext, handleStep4}) => { 

  
  
  useEffect(() => {
    const handleKeyDown = (event) => {    
      if(event.key === 'Enter'){        
          if(values3Done){
            handleVal3(criteriaRank);
            handleStep4();
          }        
      }
    }
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })

  const object3 = {}
  for (let i = 0; i < values2.length; i++) {
    if(Object.values(values3).length===0){
      object3[values2[i]]=0
    }else{
      for (let ii = 0; ii < Object.values(values3).length; ii++){
        if(values2[i]===Object.keys(values3)[ii]){
          object3[values2[i]]= Object.values(values3)[ii]
          break;
        }else{
          object3[values2[i]]=0
        }
      }  
    }         
  }  

  const [criteriaRank, setCriteriaRank] = useState(object3)

  const handleValue = (name,val)=>{    
    handleVal3({...criteriaRank, [name]:val})
    setCriteriaRank({...criteriaRank, [name]:val})
  }


  
   

  return (
    <div className={values3DoneNext ? `${styles.container}` : `${`${styles.container} animate__animated animate__fadeIn animate_faster`}`}>

        <h2 className={styles.title}>Step 3</h2>

        <p className={styles.desc}>Value the grade of importance of each criterion</p>

        {Object.keys(criteriaRank).map(criterion => (
          <div key={criterion}>
          <h3 className={styles.title2}>{criterion.charAt(0).toUpperCase() + criterion.slice(1)}</h3>
          <ValueInput              
            name={criterion}                           
            value={criteriaRank[criterion]} 
            handleValue={handleValue}
          />
          </div>
        ))}

        <button onMouseDown={ values3Done? handleStep4 : null } className={ values3Done? `${styles.btn}` : `${styles.btn} ${styles._disabled}` }>Next</button> 
    </div>
  )
}
