import React from 'react';

export default function Home() {
    return (
        <>
            <div className="home-section overlay">
                <h1>Welcome to Street Art Creations</h1>
                <p>Transforming spaces with creativity and boldness. Explore our latest projects and discover how we can bring your vision to life.</p>
                <div className="featured-projects">
                    <div className="project">
                        <img src="Project01.jpg" alt="Project 1" />
                        <h3>Urban Jungle Mural</h3>
                        <p>This vibrant mural brings the heart of the jungle to the cityscape.</p>
                    </div>
                    <div className="project">
                        <img src="Project02.jpg" alt="Project 2" />
                        <h3>Abstract Expressions</h3>
                        <p>Bold colors and dynamic shapes make this piece a true urban landmark.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
