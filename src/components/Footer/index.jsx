import styles from './footer.module.css';

export default function Footer() {

    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p style={{ fontWeight: 800 }}>抱歉</p>
                    <p style={{ textIndent: '1rem' }}>圖是stable diffusion生的，字是Chat gpt寫的，程式是Chat gpt修範例改的。等等，我這不是什麼都沒做嗎。</p>
                </div>
                <div className={styles.followUS}>
                    <p style={{ fontWeight: 800 }}>追蹤</p>
                    <div className={styles.iconsArea}>
                        <a href="#">
                            <img className={styles.icon} src="/images/twitter-circled.png" alt="twitter" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    );
}