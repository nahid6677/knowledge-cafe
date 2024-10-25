import PropTypes from "prop-types";
const BookMark = ({bookMark}) => {
    return (
        <div className="bg-slate-200 p-4 rounded-xl m-4">
            <h1 className="text-2xl"> {bookMark.title}</h1>
        </div>
    );
};

BookMark.propTypes ={
    bookMark: PropTypes.object.isRequired
}
export default BookMark;