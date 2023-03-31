import { useAppSelector } from "../../app/hooks";
import NewsItem from "./DogsItem";
import { useState } from "react";
import { Dog } from "../../features/news/news";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const NewsView = () => {
  const navigate = useNavigate();

  const [filteredDogs, setDogs] = useState(useAppSelector((state) => state.news).dogs.filter((a) => a.is_visible));
  const { dogs, error, loading } = useAppSelector((state) => state.news);
  if (dogs.length > 0 && filteredDogs.length == 0) {
    setDogs(dogs.filter((a) => a.is_visible));
  }
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {dogs.length > 0 && <h1 className="text-center">Dog Breeds </h1>}
      <input
        className="rounded-5"
        id="description"
        value={description !== "" ? description : ""}
        onChange={(e) => {
          setDescription(e.currentTarget.value);
        }}
        placeholder="cool / talkative dog"
      />
      <input
        className="rounded-5"
        id="search"
        value={search !== "" ? search : ""}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        placeholder="dog name"
      />
      <button
        className="btn btn-light rounded-5 w-10"
        onClick={() => {
          const filtered = dogs.filter((a) => a.is_visible).filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));
          setDogs(filtered.filter((a) => a.description.toLowerCase().includes(description.toLowerCase())));
        }}
      >
        Search
      </button>
      <br />
      <button
        className="btn btn-primary  rounded-5 w-10 p-2 m-3"
        onClick={() => {
          navigate("/newdog");
        }}
      >
        Add New Dog
      </button>
      {dogs.length > 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          {filteredDogs.map((a) => (
            <NewsItem key={a.name} {...a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsView;