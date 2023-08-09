import { Routes, Route } from 'react-router-dom'
import './App.css';
import Books from './components/Books';
import Category from './components/Categories';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Routes>
        <Route path="/" element={ <Books />} />
        <Route path="/category" element={ <Category />} />
      </Routes>
    </div>
  );
}

export default App;
