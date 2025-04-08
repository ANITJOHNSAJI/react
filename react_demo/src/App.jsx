import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };


  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.increment}>+</button>
          {count}
          <button onClick={this.decrement}>-</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
     
//         <button onClick={() => setCount((count) => count + 1)}>
          
//           +
//         </button>
//         {count}
//         <button onClick={() => setCount((count > 0 ? count -1 : 0) )}>
//           -
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// function App(){
//   return (
//     <>
//     <h1>hello</h1>
//     </>
//   )
// }

// class App extends React.Component {
//   render(){
//     return (
//       <>
//       <h1>hello</h1>
//       <h2>welcome</h2>

//       </>
//     )
//   }
// }


            // state

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={name:"akhil"}
//   }
//   render(){
//         return (
//           <>
//           <h1>hello {this.state.name}</h1>
        
    
//           </>
//         )
//       }
// }

        // props
        // class App extends React.Component{
        //   constructor(props){
        //     super(props)
        //     this.state={name:props.name,age:props.age}
        //   }
        //   render(){
        //         return (
        //           <>
        //           <h1>hello {this.state.name},age:{this.state.age}</h1>
                
                
            
        //           </>
        //         )
        //       }
        // }

      // nested class

      // class Demo extends React.Component{
      //   render(){
      //     return(
      //       <>
      //       <h1>demo{this.props.name}{this.props.age}</h1>
      //       </>
      //     )
      //   }
      // }
      // class App extends React.Component{
   
      //   render(){
      //         return (
      //           <>
      //          <h1>hello</h1>
      //          <h2>age{this.props.age}</h2>
      //          <Demo name="akhil" age={this.props.age}/>
              
              
          
      //           </>
      //         )
      //       }
      // }

            // user defined methods
//   class App extends React.Component{
//     constructor(){
//       super()
//       this.state={age:20}

//     }
//     changeAge = () => {
//       this.setState({age:25})
//     }
//     render(){
//       return(
//         <>
// <h1>hello</h1>
// <h2>age{this.state.age}</h2>
// <button onClick={this.changeAge}>Change Age</button>
//         </>
//       )
//     }
//   }


  // work

      
        
export default App