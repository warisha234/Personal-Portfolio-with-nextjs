import Link from "next/link";
import Image from "next/image";
import Profileimage from "./public/maiiiin.webp";

export default function HomePage() {
  return (
    <div>
      <div className="profile-info">
        <div className="info-text">
          <h1 className="name">
            <span>Warisha Turab</span>
          </h1>
          <h4 className="title">
            <span>A passionate creator of</span>
          </h4>
          <p className="heading">
            <span className="dynamic-title">Web Developer</span>
            <span className="dynamic-title">Calligrapher</span>
            <span className="dynamic-title">Freelancer</span>
            <span className="dynamic-title">Video Editor</span>
          </p>
        </div>
        <div className="image-content">
        <Image
               src={Profileimage}  alt="Profile"   className="profile-image"/>
        </div>
      </div>

         {/* resume buttons  */}
         <div className="total">
              <div className="resume">
              <Link href={"/resume"}>
                  <button>My Resume</button>
                  </Link>
                  <div className="skills">
                  <Link href={"/skills"}>
                    <button>My Skills</button>
                    </Link>
                  </div>
              </div>
          </div>
      </div>
   )
}
