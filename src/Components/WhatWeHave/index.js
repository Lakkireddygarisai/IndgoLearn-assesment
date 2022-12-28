import {MdOutlineLaptopWindows} from 'react-icons/md'

import {HiBookOpen} from 'react-icons/hi2'
import {BiCheckCircle, BiCalendarCheck} from 'react-icons/bi'

import './index.css'

const WhatWeHave = () => (
  <div className="having-container">
    <div className="having-card">
      <div>
        <div>
          <h1>Levels</h1>
          <div className="lower-part">
            <div className="having-icon">
              <HiBookOpen />
            </div>
            <div className="lower-heading">
              <h3>Three (13 papers)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="having-card">
      <div>
        <div>
          <h1>Duration</h1>
          <div className="lower-part">
            <div className="having-icon">
              <BiCheckCircle />
            </div>
            <div className="lower-heading">
              <h3>6-30 months</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="having-card">
      <div>
        <div>
          <h1>Exams</h1>
          <div className="lower-part">
            <div className="having-icon">
              <MdOutlineLaptopWindows />
            </div>
            <div className="lower-heading">
              <h3>Quarterly (Online)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="having-card">
      <div>
        <div>
          <h1>Exemptions</h1>
          <div className="lower-part">
            <div className="having-icon">
              <BiCalendarCheck />
            </div>
            <div className="lower-heading">
              <h3>Upto 9 papers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default WhatWeHave
