import "./Detail.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../../components/bookForm/BookForm";

const Detail = ({ shows }) => {
  const { id } = useParams();
  const showDetails = shows.find((show) => show.show.id.toString() === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  useEffect(() => {
    const storedBookingState = localStorage.getItem(`bookingState_${id}`);
    if (storedBookingState === "open") {
      setIsBookingOpen(true);
    }
  }, []);

  const handleBookingClick = () => {
    setIsBookingOpen(true);
    localStorage.setItem(`bookingState_${id}`, "open");
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
    localStorage.setItem(`bookingState_${id}`, "closed");
  };

  return (
    <div className="plot-card-parent">
      <div className="plot-card">
        <h2>Show Detail Page</h2>
        <p>Show ID: {id}</p>
        {showDetails ? (
          <>
            <div className="plot-card-upper">
              <div className="plot-img">
                <img
                  src={showDetails.show.image?.original}
                  alt={showDetails.show.name}
                />
              </div>
              <div className="plot-details-major">
                <h3>{showDetails.show.name}</h3>
                <p>{showDetails.show.summary}</p>
              </div>
            </div>
            <div className="plot-card-lower">
              {isBookingOpen ? (
                <BookForm
                  movieName={showDetails.show.name}
                  handleBookingClose={handleBookingClose}
                  detailsId={id}
                />
              ) : (
                <button
                  className="btn-bookTicket btn btn-outline-primary"
                  onClick={handleBookingClick}
                >
                  Book Now!
                </button>
              )}
            </div>
          </>
        ) : (
          <p>Show details not found.</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
