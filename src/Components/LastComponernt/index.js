import GetTouch from '../GetTouch'

const LastComponent = () => (
  <div className="Course-container">
    <div className="about-discription">
      <h1 className="heading">
        Kick off your ACCA Prep journey with IndigoLearn
      </h1>
      <p className="discript">
        Sign-in and get instant acccess to our FREE Courses
      </p>

      <div className="btn-container">
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

export default LastComponent
