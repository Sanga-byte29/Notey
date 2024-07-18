/* eslint-disable no-unused-vars */
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import AddNotePage from "./pages/AddNotePage"
import NoteDetail from "./pages/NoteDetail"
import EditNotePage from "./pages/EditNotePage"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const App = () => {
  const [notes,setNotes] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [filterText,setFilterText] = useState("");
  const [searchText,setSearchText] = useState("");


  const handleFilterText = (val) => {
    setFilterText(val);
  }

  const handleSearchText = (val) => {
    setSearchText(val);
  };



  const filteredNotes =
    filterText === "BUSINESS"
      ? notes.filter((note) => note.category == "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter((note) => note.category == "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter((note) => note.category == "IMPORTANT")
      : notes;
  
    //for search functionality i use useEffect hook 
    useEffect(() => {
      if(searchText.length < 3) return ;
      axios.get(`http://127.0.0.1:8008/notes-search/?search=${searchText}`)
      .then(res => {
        console.log(res.data)
        setNotes(res.data)
      })
      .catch(err => console.log(err.message));
    },[searchText])

    //getting note from rest api


  useEffect(() => {
    setIsLoading(true);
    axios.get('http://127.0.0.1:8008/notes/')
    .then(res => {
      console.log(res.data);
      setNotes(res.data);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err.message);
    })
  },[])

  const addNote = (data) => {
    axios.post('http://127.0.0.1:8008/notes/',data)
    .then(res => {
      setNotes([...notes,data]);
      toast.success("New Note Added")
      console.log(res.data);
    })
    .catch(err => {
      console.log(console.log(err.message));
    })
  }

  const updateNode = (data,slug) => {
    axios.put(`http://127.0.0.1:8008/notes/${slug}/`,data)
    .then((res) => {
      setNotes([...notes,data]);
      console.log(res.data);
      toast.success("Note Updated Successfully!")
    })
    .catch((err) => console.log(err.message));
  }

  const deleteNote = (slug) => {
    axios.delete(`http://127.0.0.1:8008/notes/${slug}/`)
    .then((res) => {
      setNotes([...notes])
    })
    .catch(err => console.log(err.message));
  }


  const router = createBrowserRouter(createRoutesFromElements (
    <>
    <Route path="/" element={<MainLayout 
    searchText={searchText} 
    handleSearchText={handleSearchText}
    />}>
    <Route index element ={<HomePage notes={filteredNotes} loading={isLoading} handleFilterText={handleFilterText} />} />
    <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
    <Route path="/edit-note/:slug" element={<EditNotePage updateNode={updateNode}/>} />
    <Route path="/notes/:slug" element={<NoteDetail deleteNote={deleteNote} />} />

    </Route>
    </>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App