import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoGames } from "../../redux/actions";
import Card from "../card/Card";

const Home = () => {
/*   const dispatch = useDispatch();
  const videoGames = useSelector(state => state.videoGames);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchVideoGames());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="card-container">
        {videoGames.map(game => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  ); */
};

export default Home;
