
import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css";

export default function Header() {

    return (
        <div className={styles.header}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.headerTitle}>
                    首頁
                </div>
            </Link>
            <div className={styles.navmenu}>
                <NavLink to="/menu"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    物品清單
                </NavLink>
                <NavLink to="/NONE"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    還沒東西
                </NavLink>
                <NavLink to="/LOGIN"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    也不能登入
                </NavLink>
            </div>
        </div>
    );
}

