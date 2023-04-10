import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home() {
  const { categoryName } = useParams();
    
  const title = !categoryName
    ? "NORDIC NEST Shopping Cart"
    : _products[0]?.category;
    
  return (
    <div className="container mainLayout">
      <Helmet><title>{title}</title></Helmet>
      <Header 
        className="layoutHeader"
        title={title}
      />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
