import Image from "next/image"
import resume from "../public/maiin.webp"
export default function Resume(){
    return(
        <div className="resume-container">
        <header>
          <div className="profile-pic">
            <Image src={resume} alt="contact us" className="image" />
          </div>
          <div className="header-content">
            <h1>Warisha Turab</h1>
            <p>Web Developer | Mass Communication Student</p>
          </div>
        </header>
      
        <section className="resume-section">
          <div className="section-circle"></div>
          <h2>Personal Information</h2>
          <p><strong>Date of Birth:</strong> Oct 30, 2005</p>
          <p><strong>Phone:</strong> 0340 2274424</p>
          <p><strong>Email:</strong> warishaturab@gmail.com</p>
          <p><strong>Address:</strong> Karachi, Pakistan</p>
          <p><strong>Nationality:</strong> Pakistani</p>
        </section>
      
        <section className="resume-section">
          <div className="section-circle"></div>
          <h2>Education</h2>
          <p><strong>Bachelor in Mass Communication</strong> - Virtual University of Pakistan</p>
          <p><strong>Intermediate</strong> - Karachi Public School</p>
        </section>
      
        <section className="resume-section">
          <div className="section-circle"></div>
          <h2>Work Experience</h2>
          <p><strong>Teacher</strong> - Al Farooq Secondary School</p>
          <ul>
            <li>Developed and executed lesson plans for Mathematics and Urdu subjects.</li>
            <li>Helped students improve their academic performance through innovative teaching techniques.</li>
          </ul>
        </section>
      
        <section className="resume-section" id="skillsSection">
          <div className="section-circle"></div>
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>Responsive Web Design</li>
            <li>Excellent Urdu Handwriting</li>
            <li>Strong communication skills</li>
          </ul>
        </section>
      
        <section className="resume-section">
          <div className="section-circle"></div>
          <h2>Projects</h2>
          <ul>
            <li><strong>Interactive Tic-Tac-Toe Game</strong> - A web-based tic-tac-toe game using HTML, CSS, and JavaScript.</li>
            <li><strong>Restaurant Website</strong> - A simple website built for a restaurant using HTML and CSS.</li>
            <li><strong>Alpha SkinCareBrand Website</strong> - A skincare product website designed with a visually appealing layout.</li>
          </ul>
        </section>
      
        <section className="resume-section">
          <div className="section-circle"></div>
          <h2>Languages</h2>
          <ul>
            <li>English</li>
            <li>Urdu</li>
          </ul>
        </section>
      </div>
      
 )

}