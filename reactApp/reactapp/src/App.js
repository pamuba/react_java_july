import React, {Component} from 'react';
import  {Greet}  from './components/first'
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComponent from './components/PureComp';
import ParentComponents from './components/ParentComponents'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


class App extends Component{
  render(){
    return (
      <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
       {/* <Greet /> */}
       {/* <Hello name="Bruce" heroName="Batman">
         <p>Data for childern props1</p>
         <p>Data for childern props2</p>
       </Hello>
       <Hello name="Clark" heroName="Superman">
         <button>CLICK</button>
       </Hello>
       <Hello name="Diana" heroName="Wonder Woman"/> */}
       {/* <Welcome></Welcome> */}
       {/* <Counter></Counter> */}
       {/* <FunctionClick></FunctionClick> */}
       {/* <ClassClick></ClassClick> */}
       {/* <EventBind></EventBind> */}

       {/* <ParentComponent /> */}
       {/* <UserGreeting></UserGreeting> */}
       {/* <NameList></NameList> */}
       {/* <Stylesheet prim={false}></Stylesheet> */}
       {/* <Inline></Inline> */}
       {/* <Form></Form> */}
       {/* <LifeCycleA></LifeCycleA> */}
       {/* <FragmentDemo></FragmentDemo> */}

       {/* <ParentComponents></ParentComponents> */}
       <ClickCounter></ClickCounter>
       <HoverCounter></HoverCounter>
      </div>
    );
  }
}

export default App;


