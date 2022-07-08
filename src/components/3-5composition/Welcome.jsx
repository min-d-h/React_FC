import React from 'react'
import Custom from './Custom'

export default function Welcome() {
  // return (
  //   <div>
  //     <Dialog>
  //       <h1>Welcome</h1>
  //       <h4>Thank you</h4>
  //     </Dialog>
  //   </div>
  // )

  return (
    <Custom title={<button>Welcome</button>} description="Thank you" name="i'm your father" />
  );
}