import styles from '../styles/Home.module.css'
const Navbar2 = () => {
    return (
        <nav2>
           <a className={styles.btn1}>Search order Id</a>
           <a className={styles.btn1}>Search Parent order Id</a>
           <a className={styles.btn2}>Search</a>
           <a className={styles.btn3}>Clear Search</a>
        </nav2>
     );
}
 
export default Navbar2;