
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/create";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constant/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<Popular/>} />
          <Route path="/movie/now" element={<NowPlaying/>} />
          <Route path="/movie/top" element={<TopRated/>} />
          <Route path="/movie/:id" element={<Detail/>}/>
        </Routes>
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
