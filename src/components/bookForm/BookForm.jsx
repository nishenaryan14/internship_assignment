import { useEffect, useState } from "react";
import "./BookForm.css";
export default function BookForm({ movieName, handleBookingClose, detailsId }) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedUserDetails = localStorage.getItem(`userDetails_${detailsId}`);
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, [detailsId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      `userDetails_${detailsId}`,
      JSON.stringify(userDetails)
    );
    handleBookingClose();
  };

  return (
    <div>
      <h2>Book Ticket for {movieName}</h2>
      <form onSubmit={handleSubmit} className="bookingForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="datetime-local"
            name="date"
            value={userDetails.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Book Ticket
        </button>
      </form>
    </div>
  );
}
