import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <section className="slider container mb-3">
            <Carousel>
              <Carousel.Item className="slide" interval={5000}>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=2048x2048&w=is&k=20&c=yhY4z4UDOVLkB5SvpGSCsUIlccByOkjakC4GH8Nwsy0="
                  alt="GUVI Learning Platform"
                />
              </Carousel.Item>
              <Carousel.Item className="slide" interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.dribbble.com/users/612987/screenshots/10964626/media/134367e23431ea75cd9440bb8fe25e27.jpg"
                  alt="Learning Place for Beginner in Native Language"
                />
              </Carousel.Item>
            </Carousel>
          </section>
        </>
  )
}

export default Home