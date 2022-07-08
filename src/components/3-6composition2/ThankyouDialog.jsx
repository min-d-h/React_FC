import React from 'react'
import Dialog from '../3-6composition2/Dialog'

export default function ThankyouDialog(props) {
  return (
    <Dialog 
    title="aaaaaaa"
    description="bbbbbbbbb" 
    name="ccccccccccc"
    button={
      <button style={{backgroundColor:"blue", color:"white" }}>
        close
      </button>
    }
    /> 

  )
}
