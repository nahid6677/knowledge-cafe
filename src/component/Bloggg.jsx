import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Bloggg = ({ blogg, handleAddToBookMark ,handleMarkAsRead}) => {
    const { title,cover_img,author_img,reading_time, author_name,posted_date,hashtags , id} = blogg;

            
        
    
    return (
        <div className='space-y-4'>
            <img className='rounded-3xl w-full mx-auto py-3' src={cover_img} alt={`Cover picture of the title ${title}`}></img>
            <div className="flex justify-between items-center ">
                <div className="flex gap-5 items-center my-3 ">
                    <img className='w-14 h-14 rounded-full' src={author_img} alt='author_name Kabir Hossin'></img>
                    <div className="">
                        <h2 className='text-xl font-bold'>{author_name}</h2>
                        {posted_date} 
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span>{reading_time} min read</span>
                    <button id='bookmark' className='' onClick={() =>handleAddToBookMark(blogg) }><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'> { title}</h2>
            <p>
                {
                    hashtags.map((item, idx) => <span key={idx}><a href="#">{item}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)}><a className='text-blue-600 underline' href="#">Mark as read</a></button>
        </div>
    );
};

Bloggg.propTypes ={
    blogg: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Bloggg;


