import React, { Component } from 'react'


const Usercontext = React.createContext("manimalarkasi")
const ChannelContext = React.createContext("barkavikasi")

const Userprovider = Usercontext.Provider
const Userconsumer = Usercontext.Consumer


export {Userprovider,Userconsumer}




class ConponentC extends Component {
  render() {
    return (
      <div>
        component C <br />
        Component c context {this.context}
        <ComponentE />
      </div>
    )
  }
}
ConponentC.contextType = Usercontext




export class ComponentE extends Component {

  static contextType = Usercontext
  render() {
    return (
      <div>
        component E <br />
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}
ComponentE.contextType = Usercontext


export class ComponentF extends Component {
  render() {
    return (
      <div>
        Component F
        <Userconsumer>
            {username =>{
                return <h1>hello! {username}</h1>
            }}
        </Userconsumer>
      </div>
    )
  }
}


export default ConponentC