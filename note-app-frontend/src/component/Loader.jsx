import ClipLoader from "react-spinners/ClipLoader"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
  };

const Loader = ({loading}) => {
  return (
    <ClipLoader
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loader