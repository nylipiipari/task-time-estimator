import styles from './Header.module.css';

const Header: React.FC = ({ children }) => {
    return (
        <header className={styles.appHeader}>
            {children}
        </header>
    )
};

export default Header;