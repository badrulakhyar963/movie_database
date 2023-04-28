import styles from "./formCovid.module.css";
import corona from "../../asset/corona.png";
import { useState } from "react";

// Menangkap props
function FormCovid(props) {

  const {provinces, setProvinces } = props;


    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");
  
  
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);
  

    function handleProvinsi (e) {
      setProvinsi(e.target.value);
    }
    function handleStatus(e) {
      setStatus(e.target.value);
    }
    function handleJumlah(e) {
      setJumlah(e.target.value);
    }
    

    function handleSubmit(e) {
      e.preventDefault();
      if (provinsi === "") {
        setIsProvinsiError(true);
      }
      else if (status === "") {
        setIsProvinsiError(false);
        setIsStatusError(true);
      }
      else if (jumlah === "") {
        setIsStatusError(false);
        setIsJumlahError(true);
      }
      else {
      const provinced = {
        kota: provinsi,
        kasus: status,
        sembuh: jumlah,
        meninggal: jumlah,
        dirawat: jumlah,
      };
      
      setProvinces([...provinces, provinced]);
      setIsProvinsiError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
      }
    }

    return (
      <div className={styles.container}>
        <section className={styles.formCovid}>
          <div className={styles.formCovid__left}>
            <img className={styles.formCovid__image} src={corona} alt=""></img>
          </div>

          <div className={styles.formCovid__right}>
            <h2 className={styles.formCovid__title}>Form Covid</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formCovid__group}>
                <label className={styles.formCovid__label}>Provinsi</label>
                <input onChange={handleProvinsi} className={styles.formCovid__input} type="text" name="provinsi"/>
                {isProvinsiError && <alert>Provinsi wajid diisi</alert>}
              </div>

              <div className={styles.formCovid__group}>
                <label className={styles.formCovid__label}>Status</label>
                <input onChange={handleStatus} className={styles.formCovid__input} type="text" name="status"/>
                {isStatusError && <alert>Status wajid diisi</alert>}
              </div>
              <div className={styles.formCovid__group}>
                <label className={styles.formCovid__label}>Jumlah</label>
                <input  onChange={handleJumlah} className={styles.formCovid__input} type="number" name="jumlah"/>
                {isJumlahError && <alert>Jumlah wajid diisi</alert>}
              </div>

              <div>
                <button className={styles.formCovid__button}>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  
  export default FormCovid;