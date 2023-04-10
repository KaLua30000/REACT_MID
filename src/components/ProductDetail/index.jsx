import { useState } from "react";
import { Row, Col, Select } from "antd";
import styles from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
      <Row gutter={[32, 32]}
         style={{ justifyContent: 'center' }}
      >
         <Col
            xs={{ span: 24 }}
            lg={{ span: 14 }}
         >
            <div className={styles.info} >
               <h2 className={styles.category} >
                  {product.category}
               </h2>
               <h1 className={styles.name} >
                  {product.name}
               </h1>
               <p className={styles.description}>
                  {product.description_long}
               </p>
               <div className={styles.wrap}>
               </div>
            </div>
         </Col>
         <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />
         </Col>
      </Row>
   );
}

export default ProductDetail;