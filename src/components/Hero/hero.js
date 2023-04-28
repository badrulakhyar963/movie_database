import styles from "./hero.module.css";
import image from "../../asset/vaccination.png" ;

function Hero() {
  return(
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h1 className={styles.hero__title}>Covid ID</h1>
                <h3 className={styles.hero__description}>Monitoring Perkembangan Covid</h3>
                <p className={styles.hero__detail}>
                Vaksinasi atau Imunisasi bertujuan untuk membuat sistem kekebalan tubuh seseorang mampu mengenali 
                dan dengan cepat melawan bakteri atau virus penyebab infeksi. Tujuan yang ingin dicapai dengan 
                pemberian vaksin COVID-19 adalah menurunnya angka kesakitan dan angka kematian akibat virus ini.
                </p>
                <button className={styles.hero__button}>Vaccine</button>
            </div >
                
            <div className={styles.hero__right}>
            <img className={styles.hero__image} src={image} alt=""></img>
            </div>
        </section>
    </div>
);
}

export default Hero;
