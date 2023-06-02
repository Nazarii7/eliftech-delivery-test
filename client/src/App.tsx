import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
