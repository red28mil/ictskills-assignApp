import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header> </Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello everyone {2+2}

        </p>
      </header>
      </div>
);
}


function Top() {
return(


<div className="links">       
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>

<Router>
<Navbar />
<Switch>
<Route exact path="/">
</Route>
<Route path="/about">
</Route>
<Route path="*">
</Route>
</Switch>
</Router>
</div>
);
}

export default App;
