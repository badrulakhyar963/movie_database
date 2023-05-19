import { useState } from "react";
import stayle from "./AddMovieForm.module.css"
import { nanoid } from "nanoid";

// Menangkap props
function AddMovieForm(props) {
  // destructing props
  const {movies, setMovies } = props;

  // membaut state object
  const[formData,setFormData] = useState({
    title: "",
    date: "",
    genre: "",
    poster:"",
  })
  
  // membuat state object error
  const[isError,setIsError] = useState ({
    setIsTitleError: false,
    setIsDateError: false,
    setIsGenreError: false,
    setIsPosterError: false,    
  })

  // membuat fungsi handleChange untuk handle semua inout form
  function handleChange(e) {
    const {name,value} = e.target;

    setIsError({
      ...isError,
      [name]:value,
    })

    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const {title,date,genre,poster} = formData
  const {setIsTitleError,setIsDateError,setIsGenreError,setIsPosterError} =isError
  function validate() {
       // Jika title kosong maka set error title true
       if (title === "") {
        setIsTitleError(true);
        return false;
      }
      // Jika date kosong maka set error title true
      else if (date === "") {
        setIsTitleError(false);
        setIsDateError(true);
        return false;
      }
      // Jika genre kosong maka set error title true
      else if (genre === "") {
        setIsDateError(false);
        setIsGenreError(true);
        return false;
      }
      // Jika poster kosong maka set error title true
      else if (poster === "") {
        setIsGenreError(false);
        setIsPosterError(true);
        return false;
      }
      else{
        setIsTitleError(false);
        setIsDateError(false);
        setIsPosterError(false);
        setIsGenreError(false);
        return true;
      }
  }

  function addMovie() {
    const movie = {
      id: nanoid(8),
      title: title,
      year: date,
      type: "Movie",
      poster: poster,
    };
    
    // menambahkan movie ke state movies
    // menggunakan spread operator untuk meng-copy dan merge array
    setMovies([...movies, movie]);
  }
  // membuat function HandleSubmit
  function handleSubmit(e) {
    // untuk mencegah perilaku default yaitu refresh menggunakan preventDefault
    e.preventDefault();

    validate() && addMovie ();
  }
    return (
      <div className={stayle.container}>
        <section className={stayle.AddMovieForm}>
          <div className={stayle.AddMovieForm__left}>
            <img className={stayle.AddMovieForm__image} src="https://www.fastxmovie.com/images/main/desktop-cropped-v2.jpg?id=5_1_1" alt=""></img>
          </div>

          <div className={stayle.AddMovieForm__right}>
            <h2 className={stayle.AddMovieForm__title}>Add Movie Form</h2>

            <form onSubmit={handleSubmit}>
              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Title</label>
                <input 
                  onChange={handleChange} 
                  className={stayle.AddMovieForm__input} 
                  type="text"
                  name="title"
                  value={title}
                />
                {/* jika error title bernilai true maka akan muncul pesan error 
                     jika tidak muncul string kosong
                 */}
                 {setIsTitleError && <alert>Title wajid diisi</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Date</label>
                <input 
                  onChange={handleChange} 
                  className={stayle.AddMovieForm__input} 
                  type="number"
                  name="date"
                  value={date}
                />
                 { setIsDateError && <alert>Date wajid diisi</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Genre</label>
                <select onChange={handleChange} className={stayle.AddMovieForm__input} name="genre" value={genre} >
                  <option value="movie">Action</option>
                  <option value="series">Drama</option>
                  <option value="series">Horor</option>
                  <option value="series">Comedy</option>
                </select>              
                { setIsGenreError && <alert>Genre wajid dipilih</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Poster</label>
                <input onChange={handleChange} className={stayle.AddMovieForm__input} type="url" name="poster" value={poster} />
                { setIsPosterError && <alert>link poster wajid diisi</alert>}
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