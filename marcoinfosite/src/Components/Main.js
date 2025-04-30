import React from 'react';

function Main(){
    return(
        <div className="main-container">
            <div className="content">
                <div>
                    <h1>Marco Dava</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="buttons">
                    <a href="mailto:marco.a.dava@gmail.com" className='gmail-anchor'><img src="./images/gmail-icon.jpg"></img><p>Gmail</p></a>
                    <a href="https://www.linkedin.com/in/marcodava/" className='linkedin-anchor'><img src="./images/linkedin-icon.png"></img><p>LinkedIn</p></a>
                </div>
                <div>
                    <h2>About</h2>
                    <p>
                        A Second Year McMaster Software Engineering Student, with <br/>
                        a strong foundation in web development and experience in <br/>
                        collaborative enviroments.
                    </p>
                </div>
                <div>
                    <h2>Interests</h2>
                    <p>
                        I enjoy learning machine learning foundations and exploring<br/>
                        my abilities in web development. I am an avid runner and<br/>
                        gym goer, and I love travelling around the world.
                    </p>
                </div>
            </div>
            <div className="profile-picture">
                <img src="./images/marco-profile-pic.jpg" alt="Picture of Marco Dava" className="profile-image"/>
            </div>
        </div>
    )
}
export default Main