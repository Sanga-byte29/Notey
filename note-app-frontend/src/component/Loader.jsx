/* eslint-disable react/prop-types */
import { PropagateLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
  };

const Loader = ({loading}) => {
  return (
    <PropagateLoader
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loader