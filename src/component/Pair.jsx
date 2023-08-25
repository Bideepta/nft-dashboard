import React from "react";
import useFetch from '../hooks/useFetch';
import CardList from "./CardList";

function Pair() {
  const { data, loading, error } = useFetch(
    "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{marginTop:'5vh'}}>
      <CardList pairs={data.pairs} />
    </div>
  );
}

export default Pair;
