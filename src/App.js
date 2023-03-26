import './App.css';
import Page1 from './form/pageno1';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Page2 from './form/pageno2';
import Page3 from './form/pageno3';
import { Provider } from 'react-redux';
import store from './form/redux/store';
import Page4 from './form/page4';




function App() {
  return (
    <Provider store={store}>
   <Router>
    <Switch>
      <Route exact path='/page1'>
        <Page1/>
      </Route>
      <Route path='/page2'>
        <Page2/>
      </Route>
      <Route path='/page3'>
        <Page3/>
      </Route>
      <Route path='/page4'>
        <Page4/>
      </Route>
    </Switch>
   </Router></Provider>
  );
}

export default App;
