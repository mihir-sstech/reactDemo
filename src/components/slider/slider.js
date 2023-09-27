import React from 'react'
import './slider.css'
import { Link } from 'react-router-dom'
function Slider() {
    return (
        <>
            <div className='container'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://economictimes.indiatimes.com/thumb/msid-66506963,width-640,height-480,resizemode-4,imgsize-79293/live-videos-getty.jpg?from=mdr" className="d-block w-100 slider-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://economictimes.indiatimes.com/thumb/msid-66506963,width-640,height-480,resizemode-4,imgsize-79293/live-videos-getty.jpg?from=mdr" className="d-block w-100 slider-image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://economictimes.indiatimes.com/thumb/msid-66506963,width-640,height-480,resizemode-4,imgsize-79293/live-videos-getty.jpg?from=mdr" className="d-block w-100 slider-image" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Slider