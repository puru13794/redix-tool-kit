import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const cartButton = useSelector((state) => state.ui.cartVisible);
  return (
    <Layout>
      {cartButton && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
