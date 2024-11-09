import Image from "next/image";
import Projectone from "../public/project-one.jpeg";
import Projecttwo from "../public/project-two.jpeg";
import Projectthree from "../public/project-three.jpeg";
import Projectfour from "../public/project-four.jpeg";
import Projectfive from "../public/project-five.jpeg";
import Projectsix from "../public/project-six.jpeg";

export default function Blogs() {
    return (
        <div>
            <h1 className="projects">MY Projects</h1>
            <div className="parentcontainer">
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projectone} alt="Tom and Jerry"/>
                    </div>
                    <h1 className="title">Blogs Website</h1>
                    <p className="description">
                        A platform to share articles and stories.  
                    </p>
                    <a href="https://blog-assignment-nextjs-2lfq.vercel.app" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>

                {/* box2 */}
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projecttwo} alt="Doraemon"/>
                    </div>
                    <h1 className="title">Static Resume</h1>
                    <p className="description">
                        A simple, non-interactive personal resume webpage.
                    </p>
                    <a href="https://hackathon-resume-milestone1-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>

                {/* box3 */}
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projectthree} alt="Picachoo"/>
                    </div>
                    <h1 className="title">Resume Builder Form</h1>
                    <p className="description">
                        Tool to create and customize resumes online and download as a PDF.
                    </p>
                    <a href="https://mileston5-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>

                {/* box4 */}
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projectfour} alt="Frozen"/>
                    </div>
                    <h1 className="title">Figma Template Design</h1>
                    <p className="description">
                        Designing web templates using Figma for projects.
                    </p>
                    <a href="https://cyber-figma-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>

                {/* box5 */}
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projectfive} alt="Miraculous"/>
                    </div>
                    <h1 className="title">Login Form</h1>
                    <p className="description">
                        A login form showcasing Alpha SkinCareBrand.
                    </p>
                    <a href="https://login-form-eosin-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>

                {/* box6 */}
                <div className="childcontainer">
                    <div className="imagecontainer"> 
                         <Image src={Projectsix} alt="Pookemon"/>
                    </div>
                    <h1 className="title">Alpha Skin Website</h1>
                    <p className="description">
                        A user authentication form for website access.
                    </p>
                    <a href="https://alpha-website-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="readmore">Vercel Link</button>
                    </a>
                </div>
            </div>
        </div>
    );
}







// import Link from "next/link";
// import Image from "next/image";
// import Projectone from "../public/project-one.jpeg"
// import Projecttwo from "../public/project-two.jpeg"
// import Projectthree from "../public/project-three.jpeg"
// import Projectfour from "../public/project-four.jpeg"
// import Projectfive from "../public/project-five.jpeg"
// import Projectsix from "../public/project-six.jpeg"

// export default function Blogs() {
//     return (
//         <div>
//             <h1 className="projects">MY Projects</h1>
//             <div className="parentcontainer">
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectone} alt="Tom and jerry"/>
//                 </div>
//                 <h1 className="title">Blogs Website</h1>
//                 <p className="description">
//                     A platform to share articles and stories.  
//                 </p>
//                 <Link href="import Link from "next/link";
// import Image from "next/image";
// import Projectone from "../public/project-one.jpeg"
// import Projecttwo from "../public/project-two.jpeg"
// import Projectthree from "../public/project-three.jpeg"
// import Projectfour from "../public/project-four.jpeg"
// import Projectfive from "../public/project-five.jpeg"
// import Projectsix from "../public/project-six.jpeg"

// export default function Blogs() {
//     return (
//         <div>
//             <h1 className="projects">MY Projects</h1>
//             <div className="parentcontainer">
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectone} alt="Tom and jerry"/>
//                 </div>
//                 <h1 className="title">Blogs Website</h1>
//                 <p className="description">
//                     A platform to share articles and stories.  
//                 </p>
               
//                 <button className="readmore">Vercel Link</button>
                
//             </div>
//             </div>
//             {/* box2 */}
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projecttwo} alt="Doraemon"/>
//                 </div>
//                 <h1 className="title">Static Resume</h1>
//                 <p className="description">
//                 A simple, non-interactive personal resume webpage.
//                 </p>
//                 <Link href={"/doraemon"}>
//                 <button className="readmore">Vercel Link</button>
//                 </Link>
//             </div>
//             {/* box3 */}
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectthree} alt="picachoo"/>
//                 </div>

//                 <h1 className="title">Resume Builder Form</h1>
//                 <p className="description">
//                 Tool to create and customize resumes online.
//                 and download as a PDF.

//                 </p>
//                  <Link href={"/pookemon"}>
//                 <button className="readmore">Vercel Link</button>
//                 </Link>
//             </div>
//             {/* box4 */}
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectfour} alt="Frozen"/>
//                 </div>

//                 <h1 className="title">Figma Template Design</h1>
//                 <p className="description">
//                 Designing web templates using Figma for projects.
//                 </p>
//                 <Link href={"/frozen"}>
//                 <button className="readmore">Vercel Link</button>
//                 </Link>
//             </div>
//             {/* box5 */}
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectfive} alt="Miraculous"/>
//                 </div>

//                 <h1 className="title">Login Form</h1>
//                 <p className="description">
//                 Website showcasing products and information for Alpha SkinCareBrand.
//                 </p>
//                 <Link href={"/miraculous"}>
//                 <button className="readmore">Vercel Link</button>
//                 </Link>
//             </div>
//             {/* box 6 */}
//             <div className="childcontainer">
//                 <div className="imagecontainer"> 
//                      <Image src={Projectsix} alt="Pookemon"/>
//                 </div>

//                 <h1 className="title">Alpha Skin Website</h1>
//                 <p className="description">
//                 A user authentication form for website access.
//                    </p>
//                    <Link href={"/shinchan"}>
//                 <button className="readmore">Vercel Link</button>
//                 </Link>
//             </div>
//         </div>
//         </div>
//     )
// }
