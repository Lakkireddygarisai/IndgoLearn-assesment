import GetTouch from '../GetTouch'

import './index.css'
import AboutCard from '../AboutCard'

const CourseStructure = () => (
  <div className="Course-container">
    <div className="about-discription">
      <h1 className="heading">Become ACCA in 18 months</h1>
      <p className="discript">
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s. Begin ACCA prep with
        1FIN now.
      </p>
      <AboutCard />
      <div className="btn-container">
        <button type="button" className="download-btn">
          Download Browcher
        </button>
        <button type="button" className="learn-btn">
          SILVER LEARNING PARTNER <span className="acca">ACCA</span>
        </button>
      </div>
    </div>
    <div className="get-back-card">
      <GetTouch />
    </div>
  </div>
)

export default CourseStructure
