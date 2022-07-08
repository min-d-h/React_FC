import React from 'react'
import withLoading from './withLoading'

function Button() {
  return (
    <div>Button</div>
  )
}

export default withLoading(Button)