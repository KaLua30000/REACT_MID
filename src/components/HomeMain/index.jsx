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
                <Col span={16}>
                    <Carousel autoplay effect="fade" dotPosition="bottom" style={contentStyle}>
                        <div style={contentStyle}>
                            <img src="/images/F1.png" />
                        </div>
                        <div style={contentStyle}>
                            <img src="/images/F2.png" />
                        </div>
                        <div style={contentStyle}>
                            <img src="/images/F3.png" />
                        </div>
                    </Carousel>
                </Col>
                <Col span={8}>QQ</Col>
            </Row>
            <Row>
                <Col span={8}>
                
                </Col>
                <Col span={16}>
                    <img src="/images/F4.png" />
                </Col>


            </Row>
        </div>

    );
}


