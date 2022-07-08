import React, { useState } from 'react'

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button style={{position:"absolute", left:100}} onClick={() => setIsOpen(true)}>
        open
      </button>
      {
        isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex:"99",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 24,
            backgroundColor:"white",
            border: "1px solid green"
          }}>
          { typeof props.title === "string" ? (<h1>{props.title}</h1>) : (props.title)}
          { typeof props.description === "string" ? (<h1>{props.description}</h1>) : (props.description)}
          { typeof props.name === "string" ? (<h1>{props.name}</h1>) : (props.name)}
          { typeof props.button === "string" 
          ? (<button 
            style={{ backgroundColor:"red" ,  color:"white" }}
            onClick={() => setIsOpen(false)}>
              {props.button}
            </button>)
          : 
          <div onClick={() => setIsOpen(false)}>{props.button}</div>
          }
        </div>
      )}
      {isOpen && <div style={{
        position:"fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "lightgray"
        }}/> 
      }
    </>
  )
}
