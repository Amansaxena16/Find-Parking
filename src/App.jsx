import Book from "./components/book/Book"
import Index from "./components/index/Index"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/book" element={<Book/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
