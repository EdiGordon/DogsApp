import { Navigate, useNavigate, useParams } from "react-router-dom";
import css from "./NewsDetailsView.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleFavorite, removeDog, editDog } from "../../features/news/newsSlice";
import { useState } from "react";



const NewsDetailsView = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [ener, setEnergy] = useState(-1);

  const dog: any = useAppSelector((state) =>
    state.news.dogs.find((a) => a.name === id)
  );

  if (!dog) {
    return <Navigate to="/news" />;
  }

  const { name, image_link, description, isFavorite, energy } = dog;

  const iconStyle = { color: "blue", height: "100px", width: "100px" };
  return (
    <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
      <h3>{name}</h3>

      <button
        className="btn"
        onClick={() => dispatch(toggleFavorite(dog.name))}>
        {isFavorite && <FaHeart />}
        {!isFavorite && <FaRegHeart />}
      </button>

      <img
        className="w-100 shadow-lg p-3 bg-white rounded"
        src={image_link}
        alt={name}
      />
      <h3>Description</h3>
      <input
        className="w-75 rounded-5 text-center"
        id="description"
        value={desc === "" ? description : desc}
        onChange={(e) => {
          setDesc(e.currentTarget.value);
        }}
        placeholder="description"
      />
      
      <h3>Energy</h3>
      <input
        className="rounded-5 text-center"
        id="energy"
        value={ener === -1 ? energy : ener}
        onChange={(e) => {
          setEnergy(Number(e.currentTarget.value));
        }}
        placeholder="energy"
      />

      <br />
      <div className="p-1 m-2">
      <button
        className="btn btn-info w-50 rounded-5"
        onClick={() => {
          navigate(-1);
        }}>
        Back
      </button>
      <button
          className="btn btn-secondary w-50 rounded-5" 
        onClick={() => {
          dispatch(editDog([dog.name, desc]));
        }}>
      Edit me
      </button>
      <button
        className="btn btn-danger w-100 rounded-5"
        onClick={() => {
          dispatch(removeDog(dog.name));
          navigate(-1);
        }}>
        Delete me
        </button>
      </div>
     
    </div>
  );
};

export default NewsDetailsView;