import { useState } from "react";
import stayle from "./AddMovieForm.module.css"
import { nanoid } from "nanoid";

// Menangkap props
function AddMovieForm(props) {
  // destructing props
  const {movies, setMovies } = props;

  // membuat state title
  const [title, setTitle] = useState("");
  // membuat state date
  const [date, setDate] = useState("");
  // membuat state type
  const [type, setType] = useState("");
  // membuat state poster
  const [poster, setPoster] = useState("");

  // const [formData, setFormData] = useState([
  //   {
  //     title: "",
  //     isTitleError: false,
  //   },
  //   {
  //     date: "",
  //     isDateError: false,
  //   },
  //   {
  //     type: "",
  //     isTypeError: false,
  //   },
  //   {
  //     poster: "",
  //     isPosterError: false,
  //   },
    
  // ]);

  // membuat state title erroe/empty
  const [isTitleError, setIsTitleError] = useState(false);
  // membuat state date erroe/empty
  const [isDateError, setIsDateError] = useState(false);
  // membuat state type erroe/empty
  const [isTypeError, setIsTypeError] = useState(false);
  // membuat state poster erroe/empty
  const [isPosterError, setIsPosterError] = useState(false);

  // function handleChange(e) {
  //   // Destructing name dan value.
  //   const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  // }
  // membuat function handleTitle
  function handleTitle (e) {
    setTitle(e.target.value);
  }
  // membuat fuction handleDate
  function handleDate(e) {
    setDate(e.target.value);
  }
  // membuat fuction handleType
  function handleType(e) {
    setType(e.target.value);
  }
  // membuat function handlePoster
  function handlePoster(e) {
    setPoster(e.target.value);
  }
  // membuat function HandleSubmit
  function handleSubmit(e) {
    // untuk mencegah perilaku default yaitu refresh menggunakan preventDefault
    e.preventDefault();
    // Jika title kosong maka set error title true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika date kosong maka set error title true
    else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    }
    // Jika genre kosong maka set error title true
    else if (type === "") {
      setIsDateError(false);
      setIsTypeError(true);
    }
    // Jika poster kosong maka set error title true
    else if (poster === "") {
      setIsTypeError(false);
      setIsPosterError(true);
    }
    // Jika data diisi,lakukan tambah data
    else {
    // membuat data mevie yang akan digunakan
    const movie = {
      id: nanoid(8),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };
    
    // menambahkan movie ke state movies
    // menggunakan spread operator untuk meng-copy dan merge array
    setMovies([...movies, movie]);
    setIsTitleError(false);
    setIsDateError(false);
    setIsTypeError(false);
    setIsPosterError(false);
    }
  }
  // const { title, date, poster, type } = formData;
  // const {isTitleError,isDateError,isPosterError,isTypeError} = isError;

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
                  onChange={handleTitle} 
                  className={stayle.AddMovieForm__input} 
                  type="text" 
                  value={title}
                />
                {/* jika error title bernilai true maka akan muncul pesan error 
                     jika tidak muncul string kosong
                 */}
                 {isTitleError && <alert>Title wajid diisi</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Date</label>
                <input 
                  onChange={handleDate} 
                  className={stayle.AddMovieForm__input} 
                  type="number" 
                  value={date}
                />
                 { isDateError && <alert>Date wajid diisi</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Genre</label>
                <select onChange={handleType} className={stayle.AddMovieForm__input} value={type}>
                  <option value="movie">Action</option>
                  <option value="series">Drama</option>
                  <option value="series">Horor</option>
                  <option value="series">Comedy</option>
                </select>              
                { isTypeError && <alert>Genre wajid dipilih</alert>}
              </div>

              <div className={stayle.AddMovieForm__group}>
                <label className={stayle.AddMovieForm__label}>Poster</label>
                <input onChange={handlePoster} className={stayle.AddMovieForm__input} type="url" value={poster}/>
                { isPosterError && <alert>link poster wajid diisi</alert>}
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