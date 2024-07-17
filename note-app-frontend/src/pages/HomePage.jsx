/* eslint-disable react/prop-types */
import Filter from "../component/Filter"
import NoteCardContainer from "../component/NoteCardContainer"

const HomePage = ({notes,loading,handleFilterText}) => {
  return (
     <>
     {notes.length < 1 ? <h4 style={{textAlign: "center", marginTop: "10px"}}><strong>No Notes Found!</strong></h4>: <Filter handleFilterText={handleFilterText} />}
     <NoteCardContainer notes={notes} loading={loading} />
     </>
  )
}

export default HomePage