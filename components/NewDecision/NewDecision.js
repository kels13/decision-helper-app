import React, { useState, useEffect } from 'react'
import { Header } from './Header/Header'
import { Step1 } from './Steps/Step1'
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { Step4 } from './Steps/Step4';


export const NewDecision = () => {

  useEffect(() => {
    
  var element = document.getElementById("animatedBackground")
  element.classList.add("move");
    return () => {
      element.classList.remove("move");
    }
  }, [])
  
  

  const [step, setStep] = useState(1);

  const [values, setValues] = useState({
    step1 : [],
    step2 : [],
    step3 : {},
    step4 : {},
  });
  
  const [stepDone, setStepDone] = useState({
    step1: false,
    step1Next: false,
    step2: false,
    step2Next: false,
    step3: false,
    step3Next: false,
    step4: false,
    step4Next: false,
  });


  const handleStep = {
    step1: ()=>{setStep(1); window.scrollTo(0, 0);},
    step2: ()=>{setStep(2); setStepDone({...stepDone, step1Next:true}); window.scrollTo(0, 0);},
    step3: ()=>{setStepDone({...stepDone, step2Next:true}); setStep(3);  window.scrollTo(0, 0);},
    step4: ()=>{setStep(4); setStepDone({...stepDone, step3Next:true}); window.scrollTo(0, 0);},
    step5: ()=>{setStep(5); setStepDone({...stepDone, step4Next:true}); window.scrollTo(0, 0);},
  };

  const [isDuplicate, setIsDuplicate] = useState(false)
 
  const handleValue = {
    step1: (value,min,isDouble)=>{
            const val1 = Object.values(value).filter(Boolean);
            setValues({...values, step1:val1}); 
            setIsDuplicate(isDouble)
            if ( (val1.length >= min) ){
              setStepDone({...stepDone, step1:!!!isDouble}); 
              // setStepDone({...stepDone, step1:!!!isDouble, step1Next:false});           
             
            } else {
              setStepDone({...stepDone, step1:false});              
            }       
          },
    step2: (value,min,isDouble)=>{ 
            const val2 = Object.values(value).filter(Boolean); 
            setValues({...values, step2:val2});
            setIsDuplicate(isDouble);
            
            if ((val2.length >= min)){              
              setStepDone({...stepDone, step2:!!!isDouble});  

              for (let i = 0; i < val2.length; i++) {
                
                if(val2[i]!==Object.values(values.step3)[i]){
                  setStepDone({...stepDone, step3:false, step3Next:false, step2:!!!isDouble});
                  
                }    
              }

            } else {

              setStepDone({...stepDone, step2:false});              
            };
                       
            
            
          },
    step3: (obj3)=>{
            const val3 = Object.values(obj3) 

              if(val3.every((x)=>x>0)){
                setStepDone({...stepDone, step3:true});
              }else{
                setStepDone({...stepDone, step3:false}); 
              }
            setValues({...values, step3:obj3})            
                     
          },
    step4: ()=>{

          },
    step5: ()=>{

          },
  };




  

  return (
    <div>
      <Header step={step} handleStep={handleStep} stepDone={stepDone} isDuplicate={isDuplicate}/>
      
      {step===1 && <Step1 handleVal1={handleValue.step1} handleStep2={handleStep.step2} values1={values.step1} values1Done={stepDone.step1} values1DoneNext={stepDone.step1Next}/>}

      {step===2 && <Step2 handleVal2={handleValue.step2} handleStep3={handleStep.step3} values2={values.step2} values2Done={stepDone.step2} values2DoneNext={stepDone.step2Next}/>}

      {step===3 && <Step3 handleVal3={handleValue.step3} handleStep4={handleStep.step4} values2={values.step2} values3={values.step3} values3Done={stepDone.step3} values3DoneNext={stepDone.step3Next}/>}

      {step===4 && <Step4 handleVal4={handleValue.step4} handleStep5={handleStep.step5} values1={values.step1} values2={values.step2} values4={values.step4} values4Done={stepDone.step4} values4DoneNext={stepDone.step4Next}/>}
      
    </div>
  )
}
