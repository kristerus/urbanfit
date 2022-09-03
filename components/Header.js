import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="firstNavbar">
                <Link href="/">
                    <div className="leftNavSection">
                        <Link href="/"><Image src="/urbanFitLogo.png" width="50%" height="50%" alt="logo" className="navimg" /></Link>

                        <h2>
                            <Link href="/" ><a className="link">Urban Fit </a></Link>
                        </h2>
                    </div>
                </Link>

                <div className="rightSection">

                    <Link href="/">
                        <a className="link">Home</a>
                    </Link>
                    <Link href="/exercises">
                        <a className="link">Exercises</a>
                    </Link>
                    <Link href="/diets">
                        <a className="link">Diets</a>
                    </Link>
                    <Link href="/supplements">
                        <a className="link">Supplements</a>
                    </Link>



                </div>
            </div>
            <div className="hamburger-menu" id="secondmenu">
                <div>
                    <input id="menu__toggle" type="checkbox" />

                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box">
                        <div className="menu-logo"> <Link href="/"><Image src="/urbanFitLogo.png" width="50%" height="50%" alt="logo" /></Link></div>

                        <Link href="/"><a className="menu__item">Home</a></Link>
                        <Link href="/exercises"><a className="menu__item">Exercises</a></Link>
                        <Link href="/diets" ><a className="menu__item">Diets</a></Link>
                        <Link href="/supplements" ><a className="menu__item">Supplements</a></Link>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
