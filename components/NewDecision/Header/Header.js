import React from 'react'
import styles from './Header.module.css'

export const Header = ({step, stepDone, handleStep, isDuplicate}) => {
  // console.log (`Esta es la fase: ${step}`)
  
  

  
  const firstSelected = `${styles.btn} ${styles._selected}`
  const doneSelected = `${styles.btn} ${styles._selected} ${styles._done}`
  const disabledDone = `${styles.btn} ${styles._done}`
  const enabledDone = `${styles.btn} ${styles._done} ${styles._pointer}`
  const enabledUndone = `${styles.btn} ${styles._pointer}`
  const disabledUndone = `${styles.btn}`
  

  return (    
  
    <div className={`${styles.container} animate__animated animate__fadeIn animate__slower`}>
      
      <button 
        className= {step===1 ? [(stepDone.step1 && stepDone.step1Next) ? `${doneSelected} ${styles._line1}` : `${firstSelected} ${styles._line1}`] : [isDuplicate? `${disabledDone} ${styles._line1}` : `${enabledDone} ${styles._line1}`]}
        onClick= {(step!==1 && !isDuplicate) ? function(){handleStep.step1(); document.activeElement.blur()} : null}      
      />
      
      <button 
        className={step===2 ? [(stepDone.step2 && stepDone.step2Next) ? `${doneSelected}` : `${firstSelected}`] : [(stepDone.step1 && stepDone.step1Next) ? [(stepDone.step2 && stepDone.step2Next) ? `${enabledDone}`: `${enabledUndone}`] : [stepDone.step2 ? `${disabledDone}`: `${disabledUndone}`]]}
        onClick= {(step!==2 && stepDone.step1 && stepDone.step1Next) ? function(){handleStep.step2(); document.activeElement.blur()} : null}
      />
      
      <button 
        className={step===3 ? [(stepDone.step3 && stepDone.step3Next) ? `${doneSelected}` : `${firstSelected}`] : [(stepDone.step1 && stepDone.step2 && stepDone.step2Next)? [(stepDone.step3 && stepDone.step3Next) ? `${enabledDone}`: `${enabledUndone}`] : [stepDone.step3 ? `${disabledDone}`: `${disabledUndone}`]]}
        onClick= {(step!==3 && stepDone.step1 && stepDone.step2 && stepDone.step2Next) ? function(){handleStep.step3(); document.activeElement.blur()} : null}        
      />
      
      <button 
        className={step===4 ? [(stepDone.step4 && stepDone.step4Next) ? `${doneSelected} ${styles._line2}` : `${firstSelected} ${styles._line2}`] : [(stepDone.step1 && stepDone.step2 && stepDone.step3 && stepDone.step3Next)? [(stepDone.step4 && stepDone.step4Next) ? `${enabledDone} ${styles._line2}`: `${enabledUndone} ${styles._line2}`] : [stepDone.step4 ? `${disabledDone} ${styles._line2}`: `${disabledUndone} ${styles._line2}`]]}
        onClick= {(step!==4 && stepDone.step1 && stepDone.step2 && stepDone.step3 && stepDone.step3Next) ? function(){handleStep.step4(); document.activeElement.blur()} : null}         
      />
      
      <button 
        className={step===5 ? `${firstSelected}` : [(stepDone.step1 && stepDone.step2 && stepDone.step3 && stepDone.step4) ? `${enabledUndone}` : `${disabledUndone}`]}
        onClick={(step!==5 && stepDone.step1 && stepDone.step2 && stepDone.step3 && stepDone.step4) ?  function(){handleStep.step5(); document.activeElement.blur()} : null}
      />

    </div> 

  )
}
