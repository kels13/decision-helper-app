import React, { useEffect, useState } from 'react'
import { ValueInput } from './Inputs/ValueInput'
import styles from './Steps.module.css'


export const Step4 = ({values1, values2, values4, handleVal4, values4Done, values4DoneNext, handleStep5}) => {  



  const [alternativesRank, setAlternativesRank] = useState()

  useEffect(() => {
    handleVal4(alternativesRank)     
  }, [alternativesRank]) 

  const versusObj ={}
  let versusCount = 0


  for (let i = 0; i < values1.length -1 ; i++) {
      
      for (let ii = Number(i+1); ii < values1.length; ii++) {
        versusCount ++ 
        versusObj[`versus${versusCount}`]=[values1[i], values1[ii]]         
      }      
  }
  
  console.log(versusObj)  
  
 


  const [versus, setVersus] = useState(versusObj)


  return (
    <div className={values4DoneNext || values4Done ? `${styles.container}` : `${`${styles.container} animate__animated animate__fadeIn animate_faster`}`}>

        <h2 className={styles.title}>Step 4</h2>

        <p className={styles.desc}>For each criterion, evaluate the alternatives by pair-wise comparisons</p>

        <div>
            {values2.map((criterion) =>{
                return(
                    <div key={criterion}>
                    <h3 className={styles.title3}>Which is better for <b>{criterion}</b>?</h3>                    
                    
                    {Object.keys(versus).map(pos => (
                        <div key={pos}>
                        <div className={styles.versusContainer}>
                        <h3 className={styles.titleVersus}>{versus[pos][0].charAt(0).toUpperCase() + versus[pos][0].slice(1)}</h3>
                        <h3 className={`${styles.titleVersus} ${styles._rigth}`}>{versus[pos][1].charAt(0).toUpperCase() + versus[pos][1].slice(1)}</h3>
                        </div>
                        </div>
                    ))}                    
                    </div>
                )
            })}
            

            
        </div>

        

        <button onMouseDown={ values4Done? handleStep5 : null } className={ values4Done? `${styles.btn}` : `${styles.btn} ${styles._disabled}` }>Next</button>  
    </div>
  )
}
