import PropTypes from 'prop-types';
import BookMark from './BookMark';
const BookMars = ({bookMarks}) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
            <h2 className="text-2xl text-center">Spent time on read: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMars.propTypes = {
    bookMarks: PropTypes.object.isRequired
}
export default BookMars;