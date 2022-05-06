import axios from "axios";
import { useState, useEffect } from "react";
import GameCard from "../GameCard";

const Homepage = () => {
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    async function doSomeDataFetching() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get("http://localhost:4000");

      console.log("Got back:", res.data);
      setGameList(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      {!gameList ? (
        <p>Still Loading</p>
      ) : (
        gameList.map((games) => (
          <GameCard
            name={games.name}
            description={games.description}
            link={games.link}
            ghlink={games.ghlink}
          />
        ))
      )}
    </div>
  );
};
export default Homepage;
