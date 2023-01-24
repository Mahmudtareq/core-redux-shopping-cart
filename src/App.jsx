import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHeader from './components/TopHeader/TopHeader';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import TopOrder from './pages/TopOrder';
import store from './redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<TopOrder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
