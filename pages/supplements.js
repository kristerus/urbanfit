import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Header'
import { useState } from 'react'
import Image from 'next/image'

const Supplements = () => {
    const [query, setQuery] = useState("")

    const supplementList = [
        {
            name: "MULTI VITAMIN COMPLEX",
            producer: "APPLIED NUTRITION",
            description: "Multi-Vitamin Complex contributes to the normal function of the immune system during and after intense physical exercise, the nervous system as well as normal muscle and cognitive function, and the normal formation of connective tissue.",
            image: "multivitamin.webp",
            price: "",
            video: "",
            id: "8"
        },
        {
            name: "BCAA AMINO-HYDRATE",
            producer: "APPLIED NUTRITION",
            description: "BCAA Amino Hydrate is the SUGAR FREE intra workout & recovery drink-mix that all Athletes, Bodybuilders, Powerlifters, Boxers and general keep fitters should be consuming during every workout.",
            image: "bcaa-aminohydrate.webp",
            price: "",
            video: "",
            id: "1"
        },
        {
            name: "COLLAGEN PEPTIDE",
            producer: "APPLIED NUTRITION",
            description: "Look & Feel your Best: Applied Nutrition Hydrolysed Bovine Collagen Peptides are neutral in flavour and perfect for adding to water, coffee, smoothies, recipes, yoghurts and more. Our Collagen Peptides can be mixed in hot or cold liquids and can be used any time during the day.",
            image: "collagen.webp",
            price: "",
            video: "",
            id: "16"
        },
        {
            name: "DIET WHEY PROTEIN",
            producer: "APPLIED NUTRITION",
            description: "Diet Whey Protein has been developed using a unique blend of Whey Protein Concentrate, Whey Protein Isolate & Hydrolysed Whey Protein. Whey Protein Concentrate is produced by Ultra-Filtration Technology containing high levels of Protein and Branched Chain Amino Acids (BCAAs). ",
            image: "dwp.webp",
            price: "",
            video: "",
            id: "17"
        },
        {
            name: "COLLAGEN PEPTIDE",
            producer: "APPLIED NUTRITION",
            description: "Look & Feel your Best: Applied Nutrition Hydrolysed Bovine Collagen Peptides are neutral in flavour and perfect for adding to water, coffee, smoothies, recipes, yoghurts and more. Our Collagen Peptides can be mixed in hot or cold liquids and can be used any time during the day.",
            image: "collagen.webp",
            price: "",
            video: "",
            id: "18"
        },
        {
            name: "RIPPED ANIMALS ",
            producer: "UNIVERSAL NUTRITION",
            description: "Animal Cuts is a metabolic powerhouse crammed into a single pack. Each precisely formulated dose can help you tear away the unwanted adipose accumulated in the mass-gaining off-season, ",
            image: "rpa.jpg",
            price: "",
            video: "",
            id: "19"
        },
        {
            name: "CREATINE",
            producer: "BODITRONICS",
            description: "Boditronics Bodipure Creatine is made with DCD free technology to bring you the purest Ceatine. The100% micronised Creatine Monohydrate is HPLC tested and analysed for 100% purity. ",
            image: "bcreate.webp",
            price: "",
            video: "",
            id: "20"
        },
        {
            name: "PRIME WHEY PROTEIN ",
            producer: "QNT",
            description: "Naturally rich in branched-chain amino acids (BCAA), Prime Whey contributes to muscle growth and maintenance of body tone. This new range is ideal for all strength sports and can be used in a rapid fat loss program. ",
            image: "prime-whey-protein.png",
            price: "",
            video: "",
            id: "4"
        },
        {
            name: "Whey Protein",
            producer: "QNT",
            description: "Light Digest Whey Protein is a brand new generation of protein, formulated to adapt to all athletes (beginners or experienced), but also to any active person. This whey protein will fit perfectly into a healthy and balanced diet.",
            image: "wheyproteinqnt.png",
            price: "",
            video: "",
            id: "2"
        },
        {
            name: "OMEGA 3",
            producer: "QNT",
            description: "Omega-3s are essential polyunsaturated fatty acids that are absolutely essential to the human body. It is necessary to bring them through food. For example, it is found in large quantities in fish. However, it is sometimes difficult today to have a diet that provides an adequate daily intake of omega-3.",
            image: "omega-3.png",
            price: "",
            video: "",
            id: "5"
        },
        {
            name: "BCAA POWDER 8500",
            producer: "QNT",
            description: "QNT’s refreshing and delicious BCAA POWDER 8500 is a very easily soluble powder containing the perfect dose and mix of Leucine, Isoleucine and Valine. These 3 amino acids are essential for faster recovery after your training sessions and for optimal muscle growth. ",
            image: "bcaa-8500.png",
            price: "",
            video: "",
            id: "6"
        },
        {
            name: "CREATINE",
            producer: "QNT",
            description: "Creatine monohydrate powder is the ideal supplement for athletes who want to improve their strength or power. The creatine we offer is pure and perfect in combination with intensive short series training sessions. It also allows a better recovery after the effort. ",
            image: "Creatine-monohydrate-powder.png",
            price: "",
            video: "",
            id: "9"
        },
        {
            name: "L-Carnitine",
            producer: "QNT",
            description: "L-Carnitine is a molecule that is used by the body to carry the fat inside the cells, to be used by the mitochondria to produce energy. Without Carnitine, the body is unable to use fat as an energy source and it is forced to use only the carbohydrates. ",
            image: "lcarnitine.jpg",
            price: "",
            video: "",
            id: "10"
        },
        {
            name: "Elite NO + PRE-WORKOUT ",
            producer: "QNT",
            description: "Containing among others Beta-alanine and L-arginine, Elite NO+ will be your ideal pre-workout by stimulating your muscles and helping you improve your performances. ",
            image: "pw.jpg",
            price: "",
            video: "",
            id: "11"
        },
        {
            name: "ISOTONIC - DRINK",
            producer: "QNT",
            description: "This refreshing isotonic hydration drink helps you replenish your energy levels and replace nutrients lost through intense training thanks to its rapid supply of carbohydrates & minerals.  ",
            image: "pw.jpg",
            price: "",
            video: "",
            id: "12"
        },
        {
            name: " ACTIF BCAA'S 8000- DRINK",
            producer: "QNT",
            description: "BCAA'S 8000 is a delicious refreshing drink containing 8000mg of BCAA per bottle of 700ml. These three essential amino acids play a crucial role in energy production and help muscles recovery after strenuous exercise. ",
            image: "d1.jpg",
            price: "",
            video: "",
            id: "13"
        },

        {
            name: " ACTIF BCAA'S 8000- DRINK",
            producer: "QNT",
            description: "BCAA'S 8000 is a delicious refreshing drink containing 8000mg of BCAA per bottle of 700ml. These three essential amino acids play a crucial role in energy production and help muscles recovery after strenuous exercise. ",
            image: "d2.jpg",
            price: "",
            video: "",
            id: "14"
        },
        {
            name: " ACTIF BCAA'S 8000- DRINK",
            producer: "QNT",
            description: "BCAA'S 8000 is a delicious refreshing drink containing 8000mg of BCAA per bottle of 700ml. These three essential amino acids play a crucial role in energy production and help muscles recovery after strenuous exercise. ",
            image: "d3.jpg",
            price: "",
            video: "",
            id: "15"
        },

        {
            name: "BULK XL - MASS GAINER",
            producer: "BPI SPORTS",
            description: "Bulk Muscle XL™ is an anabolic mass gainer that helps you build lean muscle with more protein, more muscle-building carbohydrates and more good calories per serving so you can get thicker, bigger and stronger.",
            image: "bpimassgainer.webp",
            price: "",
            video: "",
            id: "3"
        },
        {
            name: "ULTRA WHEY PRO- PROTEIN",
            producer: "UNIVERSAL",
            description: "Ultra Whey Pro™ provides an excellent and complete source of amino acids. Every scoop delivers 24 grams of protein derived from our proprietary Pure Whey™ protein blend, a unique matrix comprised of ultrafiltered whey isolates.",
            image: "ultrawheypro.jpg",
            price: "",
            video: "",
            id: "7"
        },

    ]

    return (
        <div>
            <Head>
                <title>Urban Fit - Biggest Modern Fitness Center In Albania</title>
                <meta name="description" content="Urban Fit is a modern fitness center, located near the center of Tirana, Albania. Covering an immense area, the center features a gym area, a cross fit and cardio environment, as well as a yoga and martial arts section, for groups of all ages. The gym is opened from Monday to Sunday, from 6:00 to 23:00 and features a sophisticated automated entry system. Every member is equipped with their own gym card. The gym has several instructors based on the type of activity. Working out is a pleasure. The gym also features a full-fledged sauna for maximal experience. Gym. Sauna. Karate. Cross-Fit. Cardio. Weightlifting. Workout. " />
                <link rel="icon" href="/urbanFitLogo.png" />
            </Head>

            <main className="supplements">
                <Navbar />
                <div className='container'>
                    <div className='supplementintro' id="supplementIntro">
                        <h1 className='supplementsTitle' id="suptitle"><span className='firstLetter'>B</span>oost <br></br><span className='firstLetter'>Y</span>our <br></br><span className='firstLetter'>P</span>erformance</h1>
                    </div>
                    <div className='suplementlist'>
                        <div className='supplementheader'>
                            <h1>Here Is What We Offer!</h1>
                            <input type="text" placeholder='Search...' className="search" onChange={e => setQuery(e.target.value)} />
                        </div>
                        <div className='supplementDisplay'>
                            {supplementList.filter(item => item.name.toLowerCase().includes(query)).map(item => {
                                return (
                                    <div className='supplement' key={item.id}>
                                        <h2 className='itemName'>{item.name}</h2>
                                        <Image src={`/${item.image}`} width="300px" height="300px" alt={`${item.name} image`} className="itemImage"></Image>
                                        <h4 className='itemProducer'>By {item.producer}</h4>
                                        <p className='itemDescription'>{item.description}</p>
                                        <h4 className='itemPrice'>{item.price}</h4>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Supplements