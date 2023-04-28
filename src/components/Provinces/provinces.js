import Provice from "../Province/province";
import styles from "./provinces.module.css";

function Provinces (props) {
  const {provinces} = props;

  


    return(
        <div className={styles.container}>
            <h2 className={styles.table__title}>Provinsi</h2>
            <h3 className={styles.table__description}>Data covid berdasarkan provinsi</h3>
          <table className={styles.table}>
            <tr className={styles.table__row}>
              <th className={styles.table__head}>No</th>
              <th className={styles.table__head}>Provinsi</th>
              <th className={styles.table__head}>Positif</th>
              <th className={styles.table__head}>Dirawat</th>
              <th className={styles.table__head}>Sembuh</th>
              <th className={styles.table__head}>Meninggal</th>
            </tr>
              {
                provinces.map(function(province) {
                return <Provice province={province}/>
                })
              }
          </table>

        </div>
    );
}

export default Provinces;