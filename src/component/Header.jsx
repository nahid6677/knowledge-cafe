import profile from '../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto px-4 border-b-2 mb-5'>
            <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
            <img src={profile}></img>
        </header>
    );
};

export default Header;