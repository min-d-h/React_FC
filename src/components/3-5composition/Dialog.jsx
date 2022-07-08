import React from 'react'

export default function Dialog(props) {
  return (
    <div style={{backgroundColor:"skyblue", color:"orange"}}>
      {props.children}
    </div>
  )
}
