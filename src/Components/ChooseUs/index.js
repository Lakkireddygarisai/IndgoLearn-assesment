import './index.css'

const ChooseUs = () => (
  <div className="choose-us-container">
    <div>
      <h1 className="Choose-heading">Why Choose Us?</h1>
      <h1 className="line">______</h1>
    </div>
    <div className="all-crds-container">
      <div className="crd-container">
        <div>
          <img
            src="https://res.cloudinary.com/dnuwotguy/image/upload/v1672214162/ca_concept_ed464y.png"
            className="card-pic"
            alt="Expert Faculty"
          />
        </div>
        <div>
          <h1 className="card-heading">Expert Faculty</h1>
        </div>
        <div>
          <p className="crd-discript">
            Our Faculty are subject matter expertise with practical experience.
            They believe in #StudentFirst principle
          </p>
        </div>
      </div>
      <div className="crd-container">
        <div>
          <img
            src="https://res.cloudinary.com/dnuwotguy/image/upload/v1672214163/ca_top_faculties_cacfdx.png"
            className="card-pic"
            alt="Expert Faculty"
          />
        </div>
        <div>
          <h1 className="card-heading">Complete Success Package</h1>
        </div>
        <div>
          <p className="crd-discript">
            Leading Exam Prep Destination with Video classes, Live sessions,
            Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
            Webinars.
          </p>
        </div>
      </div>
      <div className="crd-container">
        <div>
          <img
            src="https://res.cloudinary.com/dnuwotguy/image/upload/v1672214162/ca_unlimited_views_d0iyba.png"
            className="card-pic"
            alt="Expert Faculty"
          />
        </div>
        <div>
          <h1 className="card-heading">Placements</h1>
        </div>
        <div>
          <p className="crd-discript">
            Resume building workshops, mock interviews and placement drives will
            help you impress the top employers and get the dream job.
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default ChooseUs
