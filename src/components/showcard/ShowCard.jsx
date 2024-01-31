import { Link } from "react-router-dom";

export const ShowCard = ({ show }) => {
  const { id, image, name, genres } = show;

  return (
    <div className="show" key={id}>
      <div>
        <img
          src={
            image?.original !== "N/A"
              ? image?.original
              : "https://via.placeholder.com/400"
          }
          alt={name}
        />
      </div>
      <div>
        <span>{genres}</span>
        <h3>{name}</h3>
        <button className="btn btn-outline-light">
          <Link to={`detail/${id}`}>Show Details</Link>
        </button>
      </div>
    </div>
  );
};
