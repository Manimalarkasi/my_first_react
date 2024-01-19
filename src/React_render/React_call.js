import React from 'react'
import '../App.css'
import UseState from './UseState'
import Usereducerrender from './Usereducer'
import Stateimmutable, { Stateimmutable1 } from './Stateimmutable'
import Parentrender, { Grantparent, Memoparent, Memoparent1, Memoparent2, Parentrender1, Parentrender2 } from './Parentrender'
import { Childrender1 } from './Childrender'
import Memo from './Memo'
import ContextP from './Context'

function React_call() {
  return (
    <div>
      {/* <UseState /> */}
      {/* <Usereducerrender /> */}
      {/* <Stateimmutable /> */}
      {/* <Stateimmutable1 /> */}
      {/* <Parentrender /> */}
      {/* <Parentrender1>
        <Childrender1 />
      </Parentrender1> */}
      {/* <Grantparent /> */}
      {/* <Grantparent >
      <Parentrender1>
        <Childrender1 />
      </Parentrender1>
      </Grantparent> */}
      {/* <Parentrender2 /> */}
      {/* <Memoparent /> */}
      {/* <Memoparent1 /> */}
      {/* <Memoparent2 /> */}
      <ContextP />
    </div>
  )
}

export default React_call
