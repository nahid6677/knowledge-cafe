import PropTypes from 'prop-types';
import BookMark from './BookMark';
const BookMars = ({bookMarks , readingTime}) => {

    return (
        <div className="md:w-1/3 ">
            <div className="w-full bg-gray-300 ml-4 mt-3 py-4 rounded-xl">
            <h2 className="text-2xl text-center text-blue-600 font-bold">Spent time on read: {readingTime}</h2>
            </div>
            <div className="bg-gray-300 ml-4 mt-2 pt-4 rounded-xl w-full h-full">
                <h2 className='text-2xl font-bold text-center'> Bookmarked Blogs: B</h2>
                {
                bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
            </div>
        </div>
    );
};

BookMars.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default BookMars;