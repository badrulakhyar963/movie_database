import styles from "./province.module.css"



function Provice(props) {
    const {province} = props;
    
    return(
        <tr className={styles.table__row}>
            <td className={styles.table__data}></td>
            <td className={styles.table__data}>{province.kota}</td>
            <td className={styles.table__data}>{province.kasus}</td>
            <td className={styles.table__data}>{province.sembuh}</td>
            <td className={styles.table__data}>{province.meninggal}</td>
            <td className={styles.table__data}>{province.dirawat}</td>
        </tr>
    )
}

export default Provice;