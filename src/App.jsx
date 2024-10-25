// App.jsx
import { useState } from 'react';
import './App.css';
import Blogs from './component/Blogs';
import BookMars from './component/bookmark/BookMars';
import Header from './component/Header';
import './index.css';

function App() {

  const [bookMarks, setBookMarks] =useState([])

  const handleAddToBookMark = (blog) =>{
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto px-4">
      <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
      <BookMars bookMarks={bookMarks}></BookMars>
      </div>
    </>
  );
}

export default App;

