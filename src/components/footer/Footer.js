import stayle from "./Footer.module.css" 

function Footer() {
    return(
        <div className={stayle.container}>
            <footer className={stayle.footer}>
                <h3 className={stayle.footer__title}>Copyright 2023 | MovieKu | Created by Axhyar </h3>
            </footer>
        </div>
    );
}

export default Footer;