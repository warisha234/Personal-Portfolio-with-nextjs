import Image from "next/image";
import Facebook from "../public/facebook.webp"
import Instagram from "../public/instagram.webp"
import Linkdin from "../public/linkdin.webp"

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p>Empowering creativity through technology </p>
                </div>

                <div className="footer-section social-media">
                    <h4 className="hading-footer">Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61550896005267"><Image src={Facebook}alt="Facebook" /></a>
                        <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDA1Mjc4NzMyODMzMDQ3?story_media_id=3147399699153787319_53769659730&igsh=eWVseDV1N3pzd2N3"><Image src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/warisha-turab-8666b82b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Image src={Linkdin} alt="LinkedIn" /></a>
                    </div>
                </div>
                <div className="footer-section contact-info">
                    <h4 className="hading-footer">Contact Me</h4>
                    <p>Email: warishaturab@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}
