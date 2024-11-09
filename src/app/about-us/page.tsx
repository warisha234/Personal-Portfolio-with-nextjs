import Image from "next/image"
import Aboutme from "../public/aboutme img.webp"

export default function About() {
    return (
        <div>
            <section id="aboutme" className="aboutme">
                <h2>About Me</h2>
                <div className="aboutme-content">
                    <Image src={Aboutme} alt="aboutme" />
                    <div className="aboutme-text">
                        <p>Hello! I&apos;m Warisha, a passionate web developer with a love for creating stunning,
                            user-friendly websites. I have a strong background in front-end and back-end development and
                            thrive on solving complex problems through code.
                        </p>
                        <p>When I&apos;m not coding, you&apos;ll find me exploring new destinations, as traveling is my way of
                            gaining inspiration and experiencing different cultures. Each journey enriches my
                            perspective, which I bring back into my work, making my designs more diverse and globally
                            appealing.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}