import styles from './header.module.scss';

interface HeaderProps {
    children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <header className={styles['header']}>
            {children}
        </header>
    );
}