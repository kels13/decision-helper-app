import React, { useState} from 'react'

import { TextInputOptional } from './TextInputOptional';
import { TextInputRequired } from './TextInputRequired';



export const TextInput = ({ name, min, max, prevValues, isValuesDone, handleSetValues, handleNext }) => {    
    
    //'' values are necessary for controller imputs, sino undefined require useRef y ya no es lo mismo ...warmings y demás
    //antes de asignar states se mira si hay values, y sino los hay se crea objValues, vacio
    
    
    let arrMax =[];
    let objValues={};
    for (let i = 1; i <= max; i++){
        arrMax[i-1]=i;
        if(prevValues[i-1]){
            objValues[`val${i}`]=prevValues[i-1];
        }else{
            objValues[`val${i}`]='';
        }                
    };

    const [inputValues, setInputValues] = useState(objValues)
    
    
    let arrRequired =[];
    for (let i = 1; i <= min; i++){
        arrRequired[i-1]=i;
    };

    let arrOptional =[];
    for (let i = min+1; i <= max; i++){
        arrOptional[i-min-1]=i;
    };
    
    const [isDuplicate, setIsDuplicate] = useState(false)

    const handleChangeValues = ({target})=>{ 
        //onChange -> setInputValues        
        if(target.value.trim().length > 0){
            const num = Number(target.id.replace(/val/,''))
             
            for (let i = 0; i < max; i++) {
            if(i+1 !== num){
                
            
                if (target.value.trim().toLowerCase() === inputValues[`val${i+1}`].trim().toLowerCase()) {                  
                  setInputValues({...inputValues, [target.id]: target.value});
                  handleSetValues({...inputValues, [target.id]: target.value},min,true); 
                  setIsDuplicate(true);
                  break;                  
                }else{
                    setIsDuplicate(false)
                    setInputValues({...inputValues, [target.id]: target.value});
                    handleSetValues({...inputValues, [target.id]: target.value},min,false);                    
                }
            }
        }
                    
        }else{
            setIsDuplicate(false)
            setInputValues({...inputValues, [target.id]: ''});
            handleSetValues({...inputValues, [target.id]: ''},min,false);
        } 
    }    

    const handleReorderValues = ()=>{
        //onBlur -> delete empty values and reorder interface before send values
        const arrCheck = Object.values(inputValues);
        for (let i=max-1; i>-1; i--){ 
            if(arrCheck[i]!==''){
                for (let ii = i-1; ii>-1; ii--) { 
                    if(arrCheck[ii]===''){
                        const arrClean = Object.values(inputValues).filter(Boolean);        
                        arrMax.map(pos => (arrClean[pos-1]? null : arrClean[pos-1]=''))              
                        arrMax.map(pos => (objValues[`val${pos}`]=arrClean[pos-1])) 
                        setInputValues(objValues);
                        const next = 'val'+ (i+1);
                        document.getElementById(next).focus();
                        break;
                    }    
                }                           
            break;
            }            
        }        
    }


    

  return (
    <>
    {isDuplicate && <p>Duplicate items aren't allowed</p>}    
        {arrRequired.map(pos => (
            <TextInputRequired 
                name={name}
                key={pos}
                pos={pos} 
                values={inputValues} 
                onChange={handleChangeValues}
                onBlur={handleReorderValues}  
                isDuplicate={isDuplicate}
            />
        ))}
        {arrOptional.map(pos => (
            <TextInputOptional
                name={name}
                key={pos}
                pos={pos}
                first={min+1}
                values={inputValues} 
                onChange={handleChangeValues}
                onBlur={handleReorderValues} 
                isDuplicate={isDuplicate}
            />
        ))}   
                  
    </>
  )
}
