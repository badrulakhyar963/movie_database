import stayle from "./AddMovieForm.module.css"

// Menangkap props
function AddMovieForm() {
    return (
      <div className={stayle.container}>
        <section className={stayle.AddMovieForm}>
          <div className={stayle.AddMovieForm__left}>
            <img className={stayle.AddMovieForm__image} src="https://www.fastxmovie.com/images/main/desktop-cropped-v2.jpg?id=5_1_1" alt=""></img>
          </div>

          <div className={stayle.AddMovieForm__right}>
            <h2 className={stayle.AddMovieForm__title}>Add Movie Form</h2>
            <form >
              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Title</label>
                <input className={stayle.AddMovieForm__input} type="text" name="title"/>
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Date</label>
                <input className={stayle.AddMovieForm__input} type="text" name="date"/>
              </div>

              <div>
                <button className={stayle.AddMovieForm__button}>Add Movie</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  
  export default AddMovieForm;