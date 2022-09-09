import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import useDownloader from "react-use-downloader";


const Footer = () => {

    return (
        <div className='footer'>
            <div className='primaryFooter'>
                <div className='footerLinks'>
                    <h2 className="blank">Navigation</h2>
                    <ul>
                        <li style={{ margin: "8px" }}><Link href="/">
                            <a className="footerLink">Home</a>
                        </Link></li>
                        <li style={{ margin: "8px" }}> <Link href="/exercises">
                            <a className="footerLink">Exercises</a>
                        </Link></li>
                        <li style={{ margin: "8px" }}><Link href="/diets">
                            <a className="footerLink">Diets</a>
                        </Link></li>
                        <li style={{ margin: "8px" }}><Link href="/supplements">
                            <a className="footerLink">Supplements</a>
                        </Link></li>

                    </ul>
                </div>

                <div className='footerLinks'>
                    <h2 className="blank">Contacts</h2>
                    <ul>
                        <li className='social'><PhoneIcon /> <h3><a href="tel:069-409-6422" className='footerLink'>069 409 6422</a></h3></li>
                        <li className='social'><EmailIcon /> <h3>urbanfit@gmail.com</h3></li>
                        <li className='social'><InstagramIcon /> <h3>urbanfit.al</h3></li>


                    </ul>
                </div>
            </div>
            <div className='secondaryFooter'>
                <h3> Copyright © Urban Fit 2022</h3>
                <h3 className="cyclus"> <a href="https://www.cycluscorporations.com" className='cycluslink'>Powered by Cyclus Corporations</a><a href="https://www.cycluscorporations.com"><Image src="/cycluslogo.jpg" width="55%" height="55%" alt="cyclus logo" className='cyclusLogo'></Image></a></h3>
            </div>



        </div>
    )
}

export default Footer
