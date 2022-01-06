import React from 'react'

const Landing = () => {

    return (
        <div className='landing-box'>
            <div className="landing-title">
                <div class="perspective-text">
                    <div class="perspective-line">
                        <p> </p>
                        <p>Welcome to</p>
                    </div>
                    <div class="perspective-line">
                        <p>Welcome to</p>
                        <p>Runtime</p>
                    </div>
                    <div class="perspective-line">
                        <p>Runtime</p>
                        <p>Terror's</p>
                    </div>
                    <div class="perspective-line">
                        <p>Terror's</p>
                        <p>News Site</p>
                    </div>
                    <div class="perspective-line">
                        <p>News Site</p>
                        <p> </p>
                    </div>
                </div>
            </div>             
            
            
            <button onClick={() => window.location.reload(false)} className="enter">Open the gate of news</button>
        </div>
    )
}

export default Landing
