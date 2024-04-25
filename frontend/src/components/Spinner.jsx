import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Spinner = ({ loading }) => {
  const override = {
    display: "grid",
    placeItems: "center",
    margin: "200px auto",
  };

  return (
    <MoonLoader
      color="#344d79"
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
