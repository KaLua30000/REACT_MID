
import { Link } from 'react-router-dom';
import styles from './productitem.module.css';

export default function ProductItem({ product }) {

   return (
      <div className={styles.item}>
        <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>
            <h6 className={styles.category}>
               {product.category}
            </h6>
            <h2 className={styles.name}>
               {product.name}
            </h2>
         </div>
      </div>
   );
}
