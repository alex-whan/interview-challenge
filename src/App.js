import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <List />
        <Route>
          <Detail exact path="/detail" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
