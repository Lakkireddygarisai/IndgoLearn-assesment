import {
  HiFaceSmile,
  HiUsers,
  HiBookOpen,
  HiComputerDesktop,
} from 'react-icons/hi2'

import './index.css'

const AboutCard = () => (
  <div className="total-container">
    <div className="About-crd-container">
      <div className="crd-name">
        <div className="crd-logo">
          <HiFaceSmile />
        </div>
        <h1 className="crd-heading">Regitered Users</h1>
      </div>
      <div className="crd-num">249,022</div>
    </div>
    <div className="About-crd-container">
      <div className="crd-name">
        <div className="crd-logo">
          <HiBookOpen />
        </div>
        <h1 className="crd-heading">Courses Enrolled</h1>
      </div>
      <div className="crd-num">65,171</div>
    </div>
    <div className="About-crd-container">
      <div className="crd-name">
        <div className="crd-logo">
          <HiComputerDesktop />
        </div>
        <h1 className="crd-heading">Minutes Watched</h1>
      </div>
      <div className="crd-num">2,090,935,459</div>
    </div>
    <div className="About-crd-container">
      <div className="crd-name">
        <div className="crd-logo">
          <HiUsers />
        </div>
        <h1 className="crd-heading">Faculty</h1>
      </div>
      <div className="crd-num">8 Experts</div>
    </div>
  </div>
)

export default AboutCard
