import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Menu() {
  const { categoryName } = useParams();
  const _products = !categoryName
    ? products
    : products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    
  const title = !categoryName
    ? "NORDIC NEST Shopping Cart"
    : _products[0]?.category;
    
  return (
    <div className="container mainLayout">
      <Helmet><title>Menu</title></Helmet>
      <Header 
        className="layoutHeader"
        title={title}
      />
      <ProductList products={_products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Menu;
