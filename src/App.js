import React from "react";
import Counter from "./03/04/Counter";
// import StateExample from "./03/04/StateExample";
// import DefaultPropsComponent from "./03/03/DefaultPropsComponent";

class App extends React.Component {
  render() {
    // const array = [1, 2, 3];
    // const obj = { name: "제목", age: 30 };
    // const node = <h1>노드</h1>;
    // const func = () => {
    //   console.log("메시지");
    // };

    return (
      <div>
        <Counter count={0} />

        {/* <DefaultPropsComponent /> */}

        {/* <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" /> */}

        {/* <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}
        /> */}

        {/* <PropsComponent name="두잇 리액트" /> */}
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
