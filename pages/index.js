import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  const imagesUrls = [
    "rass.jpg", "1.jpeg", "2.jpeg", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "14.png", "15.png", "16.png"
  ]
  return (
    <div className="container">
      <Head>
        <title>Urban Fit - Biggest Modern Fitness Center In Albania</title>
        <meta name="description" content="Urban Fit is a modern fitness center, located near the center of Tirana, Albania. Covering an immense area, the center features a gym area, a cross fit and cardio environment, as well as a yoga and martial arts section, for groups of all ages. The gym is opened from Monday to Sunday, from 6:00 to 23:00 and features a sophisticated automated entry system. Every member is equipped with their own gym card. The gym has several instructors based on the type of activity. Working out is a pleasure. The gym also features a full-fledged sauna for maximal experience. Gym. Sauna. Karate. Cross-Fit. Cardio. Weightlifting. Workout. " />
        <link rel="icon" href="/urbanFitLogo.png" />
      </Head>

      <main className="main">
        <Navbar />
        <div className='first'>
          <div className='shitter'>
            <h1 style={{ textAlign: "center", margin: "20px" }} id="maintitle">Urban Fit</h1>
            <Image src="/urbanFitLogo.png" width="100px" height="100px" alt="logo" id="ufit" />
          </div>
          <div className='fuck' id="fuck" style={{ color: "orange" }}>

          </div>
        </div>

        <div className='prices'>
          <h1 className='pricesTitle'> Prices</h1>
          <Image src="/gym5.jpg" width="1000px" height="650px" alt="Prices image"></Image>
          <h4 style={{ textAlign: "center", margin: "20px" }}>We have additional offers in important days. Your birthday is an important day too.</h4>
        </div>
        <div className='location'>
          <div className="locationExplain">
            <h1>Where Can You Find Us?</h1>
            <p>Urban Fit is located near Bulevardi Zogu I, near the center in the capital of Albania, Tirana. The gym is situated in a secondary road, 2 minutes of walking away from the boulevard and around 12 minutes away from the Skanderbeg Square. Located underground, one can take the stairs to arrive to the huge fitness center. The center is quite visible to the open eye when passing through the street.</p>
          </div>
          <iframe className="map" id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11983.297792717138!2d19.8140675!3d41.3344306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78d6f36f28f699b0!2sUrban%20fitness!5e0!3m2!1sen!2s!4v1661793319628!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='gallery'>
          {
            imagesUrls.map(src => {
              return (
                <div className='urbanfitImage' key={src}>
                  <Image src={`/${src}`} height="350px" width="350px" alt="urbanfit image" className='urbanfitImage'></Image>
                </div>
              )
            })
          }
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
