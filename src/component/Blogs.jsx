import { useEffect } from "react";
import { useState } from "react";
import '../index.css'
import Bloggg from "./Bloggg";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-4xl">Blogs {blogs.length}</h1> */}
            {
                blogs.map(blog => <Bloggg key={blog.id} blogg={blog} handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Bloggg>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blogs;