import stayle from "./Hero.module.css"

function Hero() {
    return(
        <div className={stayle.container}>
            <section className={stayle.hero}>
                <div className={stayle.hero__left}>
                    <h1 className={stayle.hero__title}>Fast & Furious 10: Fast X</h1>
                    <h3 className={stayle.hero__genre}>Genre :Laga, Petualangan, Misteri, kejahatan</h3>
                    <p className={stayle.hero__description}>
                    Dominic Toretto harus melindungi kru dan keluarganya dari Cipher, 
                    yang sekarang bergabung dengan Dante Reyes, putra gembong narkoba Hernan Reyes, 
                    membalas dendam atas kematian ayahnya di Fast Five (2011)
                    </p>
                    <button className={stayle.hero__button}>Tonton</button>
                </div >
                    
                <div className={stayle.hero__right}>
                <img className={stayle.hero__image} src="https://www.fastxmovie.com/images/gallery/fast_x/gallery_view_1200x600_09.png" alt=""></img>
                </div>
            </section>
        </div>
    );
}

export default Hero;