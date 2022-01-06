import React from 'react'

const Landing = () => {
    return (
        <div>
            <h1>Welcome to Runtime Terror's Tech News Site</h1>        
            <div className="menu-loader">
                <span className="slide-in-blurred-top"></span>
                <span className="slide-in-blurred-top"></span>
                <span className="slide-in-blurred-top"></span>
                <span className="slide-in-blurred-top"></span>
                <span className="slide-in-blurred-top"></span>
            </div>
            <p className="intro">Here you can read the latest tech related news from all around the world.</p>
            <button className="enter">Open the gate of news</button>
        </div>
    )
}

export default Landing
