import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <List />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
