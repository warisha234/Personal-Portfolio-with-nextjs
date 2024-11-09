export default function Skill(){
    return(
        <div className="skills-section">
        <h1>My Skills</h1>
        <div className="skill">
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress html">100%</div>
          </div>
        </div>
      
        <div className="skill">
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress css">80%</div>
          </div>
        </div>
      
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress javascript">90%</div>
          </div>
        </div>
      
        <div className="skill">
          <h3>Next.js</h3>
          <div className="progress-bar">
            <div className="progress nextjs">60%</div>
          </div>
        </div>
      </div>
      
        
    )
}