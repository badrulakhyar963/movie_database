import Global from "../global/global";
import styles from "./globals.module.css";
import data from "../../utils/constants/indonesia";

function Globals(){

        const globals = data.indonesia;
    
        return(
            <div className={styles.container}>
                <section className={styles.globals}>
                    <h2 className={styles.globals__title}>Indoneisa</h2>
                    <h3 className={styles.globals__detail}>Data Covid berdasarkan Indonesia</h3>
                    <div className={styles.globals__container}>
                        {
                            globals.map(function(global) {
                                return <Global key={global.status} global={global}/>;
                            })
                        }
                    </div>
                </section>
            </div>
        );
}

export default Globals;

