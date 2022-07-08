import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
}

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      {/* 
      onClick은 root안에 들어있으나
      Portal은 새로만든 id="portal"
      portal에는 가도, root에는 버블이 일어나지 않아야 하지만!!!
      react는 그것을 찾을수 있게 해준다.
      */}
      
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{position:"absolute"}}>
        <button> bb </button>
      </div>
    </div>
  )
}
