import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  // const getCode = () => {

  // }

  // exact path="/detail/:hexId"
  // <Route exact path="/detail" component={Detail}></Route>

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route exact path="/color/:hexId" component={Detail} />
      <Footer />
    </div>
  );
};

export default App;
