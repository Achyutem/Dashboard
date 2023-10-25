import './navbar.scss'

const navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="logo" />
                <span>Dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://avatars.githubusercontent.com/u/111311052?v=4" alt="" />
                    <span>Achyutem</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
}

export default navbar;