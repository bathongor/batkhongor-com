import React from 'react';

function Home(){
    return( 
        <section className="section">
            <center>
                <h2 className="section__title">About me</h2>
                <img className="section__pic" src="/assets/aboutme-pic.jpg" alt="Me"/>
                <p className="section__para">I am a full-stack software developer, who has a passion for science and engineering. Someday, I hope to develop a simulation software that helps millions of scientists to conduct their research efficiently.
                    On my leisure time, I like to play rock or jazz guitar, do card tricks and do outdoor activities. As a relatively inexperienced developer, I like doing projects that will help me further my skills.
                </p>
            </center>
        </section>
    );
}

export default Home;