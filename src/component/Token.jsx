import React from "react";
import CardList from "./CardList";
import useFetch from '../hooks/useFetch';

function Token() {
  const { data, loading, error } = useFetch('https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{overflowY:'scroll', height:'84vh', marginTop:'5vh'}}>
      <CardList pairs={data.pairs} />
    </div>
  );
}

export default Token;
