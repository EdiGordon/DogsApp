import { Link } from "react-router-dom";
import { NewsItemProps } from "../../@types/types";
import { defaultImage } from "../../services/dogs-service";
import css from "./DogsItem.module.scss";

const NewsItem = ({ name, image_link }: NewsItemProps) => {
    return (
        <div className="w-50 shadow-lg my-5  border-light border-5 rounded  p-3 d-flex flex-column align-items-center">
            <h3 className={css.title}>{name}</h3>
            <img
                onError={({ currentTarget }) => {
                    currentTarget.src = defaultImage;
                    currentTarget.onerror = null; 
                }}
                className="w-75 shadow-lg bg-white rounded card p-3"
                alt={name}
                src={image_link}
            />
            <Link className={css.link} to={`/news/${name}`}>
                Read More
            </Link>
        </div>
    );
};

export default NewsItem;