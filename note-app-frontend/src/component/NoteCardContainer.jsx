/* eslint-disable react/prop-types */
import Loader from './Loader'
import NoteCard from './NoteCard'

const NoteCardContainer = ({notes,loading}) => {
  return (
     <div className="container">
        <div className="note-has-grid row">

         {loading && <Loader loading={loading} />}
            {notes.map((note,index) => <NoteCard key={note.id || index} note={note} />)}
        </div>
     </div>
  )
}

export default NoteCardContainer