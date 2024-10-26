// App.jsx
import { useState } from 'react';
import './App.css';
import Blogs from './component/Blogs';
import BookMars from './component/bookmark/BookMars';
import Header from './component/Header';
import './index.css';

function App() {

  const [bookMarks, setBookMarks] =useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = (blog) =>{
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead =(time, id) =>{
    const integerTime = +time;
    setReadingTime(readingTime + integerTime)
    // console.log('remove book Mark ',id)
    const remainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookMarks)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto px-4">
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMars bookMarks={bookMarks} readingTime={readingTime}></BookMars>
      </div>
    </>
  );
}

export default App;

