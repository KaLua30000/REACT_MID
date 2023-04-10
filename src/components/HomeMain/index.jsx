import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import styles from "./HomeMain.module.css";
const contentStyle = {
    width: '40vw', height: '40vw',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'red',
};

export default function Footer() {

    return (

        <div >
            <Row>
                <Col xs={{ span: 12 }} lg={{ span: 12}}>
                    <img src="/images/F1.png" className={styles.img} />
                </Col>
                <Col span={12}>
                    <div className={styles.text}>
                        今天我們要來介紹一些非常奇特的海洋生物，它們是我們大海中的一道風景線，也是海洋生態系統中的重要一環。
                        <br />
                        這些生物有著獨特的特點，它們生活在不同的海洋環境中，以自身特有的方式適應著各種極端的環境，讓我們不禁對海洋生態的多樣性感到驚嘆。
                    </div>
                </Col>
            </Row>
            <Row>
                <br />
            </Row>
            <Row>
                <Col span={12}>
                    <div className={styles.text}>
                    有些生物在遇到危險時，能夠釋放出煙霧或水蒸氣，讓周圍的海水變得模糊或凍結，保護自己不受到其他生物的威脅；有些生物則以自己獨特的外表吸引伴侶或迷惑掠食者，讓自己得以生存下去。<br />
                    在海洋深處，還有一些生物生活在黑暗和極低的溫度環境中，它們的身體表面擁有發光的能力，為大海增添了一道美麗的風景
                    </div>
                </Col>
                <Col xs={{ span: 12 }} lg={{ span: 12 }}>
                    <img src="/images/F4.png" className={styles.img} />
                </Col>


            </Row>
        </div>

    );
}


