import React, { useEffect, useState } from "react";
import Detail from "../detail/Detail";
import { ShowCard } from "../../components/showcard/ShowCard";
import search from "../../assets/search.svg";
import "./Home.css";
function Home({ shows }) {
  const [selectedShow, setSelectedShow] = useState("");

  return (
    <div className="home">
      <h1>WeebsPoint</h1>
      {shows?.length > 0 && (
        <div className="container">
          {shows.map((show) => (
            <div key={show.id}>
              <ShowCard
                show={show.show}
                onClick={() => setSelectedShow(show.show)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
