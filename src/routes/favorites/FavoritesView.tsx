import { useAppSelector } from "../../app/hooks";
import NewsItem from "../dogs/DogsItem";

const FavoritesView = () => {
  const { dogs } = useAppSelector((state) => state.news);
  const favoriteArticles = dogs.filter((a) => a.isFavorite);
  return (
    <div>
      <h1 className="text-center">Favorites </h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {favoriteArticles.map((a) => (
          <NewsItem key={a.image_link} {...a} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesView;