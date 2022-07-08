import React from 'react'
import Dialog from "./Dialog" 

export default function custom(props) {
  return (
    <Dialog>
      <div>{props.title}</div>
      <h2>{props.description}</h2>
      <h1>{props.name}</h1>
    </Dialog>
  )
}
