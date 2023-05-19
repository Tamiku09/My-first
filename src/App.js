import { Route, Routes } from "react-router-dom"
import { Header } from './components/Main/Header';
import { AddNews } from "./pages/AddNews";
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="add_news" element={<AddNews/>}/>
      </Routes>
    </div>
  );
}

export default App;
