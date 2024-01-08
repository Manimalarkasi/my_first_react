import React from 'react'

export class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    render() {
      return (
        <div>
            
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        </div>
      );
    }
  }

export class LifecycleA extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"mani"
        }
        console.log("lifecycleA constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromProps");
        return null
    }
    componentDidMount(){
        console.log("lifecycleA componentDidMount()");
    }
    render(){
        console.log("lifecycleA render()");
        return(
            <div>
                <b>Mounting Lifecycle:1</b>
                lifecycleA
                <LifecycleB favcol="yellow"/>
            </div>
        )
    }
}

export class LifecycleB extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"mani",
            favoritecolor: "red"
        }
        console.log("lifecycleB constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB getDerivedStateFromProps");
        //return {favoritecolor: props.favcol };
        return null
    }    
    componentDidMount(){
        console.log("lifecycleB componentDidMount()");
        setTimeout(() => {
            this.setState({favoritecolor: "green"})
          }, 5000) //calling la irukka value ah edutheranum
    }
    render(){
        console.log("lifecycleB render()");
        return(
            <div>
                <b>Mounting Lifecycle:2</b>
                lifecycleA
                <p>My Favorite Color is {this.state.favoritecolor}</p>
            </div>
        )
    }
}

export class LifecycleC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"mani"
        }
        console.log("lifecycleC constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleC getDerivedStateFromProps");
        return null
    }

    shouldComponentUpdate(){
        console.log("lifecycleC shouldComponentUpdate()");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleC getSnapshotBeforeUpdate(prevProps,prevState)");
        return null
    }
    componentDidUpdate(){
        console.log("lifecycleC componentDidUpdate()");
    }
    changestate=()=>{
        this.setState({
            name:"codevolution"
        })
    }
    render(){
        console.log("lifecycleC render()");
        return(
            <div>
                <b>updating lifecycle:</b>
                lifecycleC
                <button onClick={this.changestate}>cgange state</button>
                <LifecycleD />
            </div>
        )
    }
}


export class LifecycleD extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"mani"
        }
        console.log("lifecycleD constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleD getDerivedStateFromProps");
        return null
    }
    

    shouldComponentUpdate(){
        console.log("lifecycleD shouldComponentUpdate()");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleD getSnapshotBeforeUpdate(prevProps,prevState)");
        return null
    }
    componentDidUpdate(){
        console.log("lifecycleD componentDidUpdate()");
    }
    
    render(){
        console.log("lifecycleD render()");
        return(
            <div>
                <b>updating lifecycle:</b>
                lifecycleD
                
            </div>
        )
    }
}








  export default Header