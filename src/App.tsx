import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import TopNav from "./components/top-nav/TopNav";
import AboutView from "./routes/about/AboutView";
import FavoritesView from "./routes/favorites/FavoritesView";
import NewsDetailsView from "./routes/dogs-details/DogsDetailsView";
import NewsView from "./routes/dogs/DogsView";
import AddDogView from "./routes/dogs/components/AddDogView";
import { fetchNews } from "./features/dogs/dogsSlice";
import { IconContext } from "react-icons";
import FooTer from "./components/footer/Footer"

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <>

      <TopNav />
      <IconContext.Provider value={{ color: 'red', size: '30px' }}>
        <Routes>
          <Route path="/" element={<NewsView />} />
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/news" element={<NewsView />} />
          <Route path="/newdog" element={<AddDogView />} />
          <Route path="/news/:id" element={<NewsDetailsView />} />
        </Routes>
      </IconContext.Provider>
      <FooTer />


    </>
  );
}

export default App;