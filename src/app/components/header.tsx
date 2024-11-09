import Link from "next/link";
import Image from "next/image";
import Logo from "../public/maiiiin.webp"

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="logo">
                <Image src={Logo} alt="logo" width={80} height={60} />
                    <h1>Warisha Turab</h1>
                </div>
                <h1 id="navbar-hading">Consistency leads to success</h1>
                <ul className="header-button">
                    <Link href={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link href={"/about-us"}>
                        <li>About me</li>
                    </Link>
                    <Link href={"/projects"}>
                        <li>Projects</li>
                    </Link>
                    <Link href={"/contact-us"}>
                        <li>Contact me</li>
                    </Link>
                  
                </ul>
            </div>
        </div>
    );
}