import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [gameList, setGameList] = useState(null);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4000`);
    if (!data) {
      throw new Error("ciao");
    }
    setGameList(data);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get("http://localhost:4000");

      console.log("Got back:", res);
    }
    doSomeDataFetching();
  }, []);

  return <div>Hello</div>;
};
export default Homepage;
