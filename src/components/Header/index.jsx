import { useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../NavBar";
import styles from "./header.module.css";

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className={styles.header}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className={styles.headerTitle}>
                    {title}
                </h1>
            </Link>
            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
        </div>
    );
}

