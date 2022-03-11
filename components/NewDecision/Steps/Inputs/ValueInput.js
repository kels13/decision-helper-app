import React, { useState } from 'react'
import styles from './ValueInput.module.css'

export const ValueInput = ({value,name,handleValue}) => {

  
  const [val, setVal] = useState(value)
  
  
  let defaultClass = {}
  const btn1 = `${styles.btn} ${styles._one}`
  const btn2 = `${styles.btn} ${styles._two}`
  const btn3 = `${styles.btn} ${styles._three}`
  const btn4 = `${styles.btn} ${styles._four}`
  const btn5 = `${styles.btn} ${styles._five}`
  const btn6 = `${styles.btn} ${styles._six}`

  const btnClicked1 = `${styles.btn} ${styles._clicked} ${styles._one}`
  const btnClicked2 = `${styles.btn} ${styles._clicked} ${styles._two}`
  const btnClicked3 = `${styles.btn} ${styles._clicked} ${styles._three}`
  const btnClicked4 = `${styles.btn} ${styles._clicked} ${styles._four}`
  const btnClicked5 = `${styles.btn} ${styles._clicked} ${styles._five}`
  const btnClicked6 = `${styles.btn} ${styles._clicked} ${styles._six}`
  
  const btnHover2 = `${styles.btn} ${styles._hover} ${styles._two}`
  const btnHover3 = `${styles.btn} ${styles._hover} ${styles._three}`
  const btnHover4 = `${styles.btn} ${styles._hover} ${styles._four}`
  const btnHover5 = `${styles.btn} ${styles._hover} ${styles._five}`
  const btnHover6 = `${styles.btn} ${styles._hover} ${styles._six}`

  
  if(val===0){
    defaultClass = {
      one: btn1,
      two: btn2,
      three: btn3,
      four: btn4,
      five: btn5,
      six: btn6,
    }
  }else if(val===1){
    defaultClass = {
      one: btnClicked1,
      two: btn2,
      three: btn3,
      four: btn4,
      five: btn5,
      six: btn6,
    }
  }else if(val===2){
    defaultClass = {
      one: btnClicked1,
      two: btnClicked2,
      three: btn3,
      four: btn4,
      five: btn5,
      six: btn6,
    }
  }else if(val===3){
    defaultClass = {
      one: btnClicked1,
      two: btnClicked2,
      three: btnClicked3,
      four: btn4,
      five: btn5,
      six: btn6,
    }
  }else if(val===4){
    defaultClass = {
      one: btnClicked1,
      two: btnClicked2,
      three: btnClicked3,
      four: btnClicked4,
      five: btn5,
      six: btn6,
    }
  }else if(val===5){
    defaultClass = {
      one: btnClicked1,
      two: btnClicked2,
      three: btnClicked3,
      four: btnClicked4,
      five: btnClicked5,
      six: btn6,
    }
  }else if(val===6){
    defaultClass = {
      one: btnClicked1,
      two: btnClicked2,
      three: btnClicked3,
      four: btnClicked4,
      five: btnClicked5,
      six: btnClicked6,
    }
  } 

  const [className, setClassName] = useState(defaultClass)

  const hover = {
    hoverNone : ()=>{
      if(val===0){
        setClassName({
          one: btn1,
          two: btn2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btn2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }

    },
    hover1 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btn2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btn2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnHover2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnHover2,
          three: btnHover3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnHover2,
          three: btnHover3,
          four: btnHover4,
          five: btn5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnHover2,
          three: btnHover3,
          four: btnHover4,
          five: btnHover5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnHover2,
          three: btnHover3,
          four: btnHover4,
          five: btnHover5,
          six: btnHover6,
        })
      }

    },
    hover2 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btn3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnHover3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnHover3,
          four: btnHover4,
          five: btn5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnHover3,
          four: btnHover4,
          five: btnHover5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnHover3,
          four: btnHover4,
          five: btnHover5,
          six: btnHover6,
        })
      }
    },
    hover3 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btn4,
          five: btn5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnHover4,
          five: btn5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnHover4,
          five: btnHover5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnHover4,
          five: btnHover5,
          six: btnHover6,
        })
      }
    },
    hover4 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btn5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnHover5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnHover5,
          six: btnHover6,
        })
      }
    },
    hover5 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btn6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnHover6,
        })
      }
    },
    hover6 : ()=>{
      if(val===0){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===1){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===2){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===3){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===4){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===5){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }else if(val===6){
        setClassName({
          one: btnClicked1,
          two: btnClicked2,
          three: btnClicked3,
          four: btnClicked4,
          five: btnClicked5,
          six: btnClicked6,
        })
      }
    }
  }

  const click = {
    click1:()=>{
      setVal(1)
      handleValue(name,1)      
      
      setClassName({
        one: btnClicked1,
        two: btn2,
        three: btn3,
        four: btn4,
        five: btn5,
        six: btn6,
      })
    },
    click2:()=>{
      setVal(2)
      handleValue(name,2) 
      setClassName({
        one: btnClicked1,
        two: btnClicked2,
        three: btn3,
        four: btn4,
        five: btn5,
        six: btn6,
      })
    },
    click3:()=>{
      setVal(3)
      handleValue(name,3) 
      setClassName({
        one: btnClicked1,
        two: btnClicked2,
        three: btnClicked3,
        four: btn4,
        five: btn5,
        six: btn6,
      })
    },
    click4:()=>{
      setVal(4)
      handleValue(name,4) 
      setClassName({
        one: btnClicked1,
        two: btnClicked2,
        three: btnClicked3,
        four: btnClicked4,
        five: btn5,
        six: btn6,
      })
    },
    click5:()=>{
      setVal(5)
      handleValue(name,5) 
      setClassName({
        one: btnClicked1,
        two: btnClicked2,
        three: btnClicked3,
        four: btnClicked4,
        five: btnClicked5,
        six: btn6,
      })
    },
    click6:()=>{
      setVal(6)
      handleValue(name,6) 
      setClassName({
        one: btnClicked1,
        two: btnClicked2,
        three: btnClicked3,
        four: btnClicked4,
        five: btnClicked5,
        six: btnClicked6,
      })
    },
  }


 
  


  



  return (
    <div className={styles.container}>
      <button className={className.one} onMouseOver={hover.hover1} onMouseOut={hover.hoverNone} onClick={click.click1}/>
      <button className={className.two} onMouseOver={hover.hover2} onMouseOut={hover.hoverNone} onClick={click.click2}/>
      <button className={className.three} onMouseOver={hover.hover3} onMouseOut={hover.hoverNone} onClick={click.click3}/>
      <button className={className.four} onMouseOver={hover.hover4} onMouseOut={hover.hoverNone} onClick={click.click4}/>
      <button className={className.five} onMouseOver={hover.hover5} onMouseOut={hover.hoverNone} onClick={click.click5}/>
      <button className={className.six} onMouseOver={hover.hover6} onMouseOut={hover.hoverNone} onClick={click.click6}/>
      
      
    </div>
  )
}
