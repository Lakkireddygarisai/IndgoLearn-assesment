import './index.css'

const YouwillLearn = () => (
  <div className="you-will-learn">
    <div>
      <h1 className="you-heading">What will you Learn in ACCA?</h1>
      <h1 className="line-head">______</h1>
    </div>
    <div>
      <div className="learn-cards-container">
        <div className="concepts-card">
          <div className="concepts-heading">
            <h1>Knowledge Level</h1>
          </div>
          <div>
            <ul className="learn-list-container">
              <li className="learn-list-item">Business and Technology (BT)</li>
              <li className="learn-list-item">Management Accounting (MA)</li>
              <li className="learn-list-item">Financial Accounting (FA)</li>
            </ul>
          </div>
          <div className="duration">
            <h2>3 papers</h2>
          </div>
        </div>
        <div className="concepts-card">
          <div className="concepts-heading">
            <h1>Skill Level</h1>
          </div>
          <div>
            <ul className="learn-list-container">
              <li className="learn-list-item">
                Corporate and Business Law (LW)
              </li>

              <li className="learn-list-item">Performance Management (PM)</li>
              <li className="learn-list-item">Taxation (TX)</li>
              <li className="learn-list-item">Financial Reporting (FR)</li>
              <li className="learn-list-item">Audit and Assurance (AA)</li>
              <li className="learn-list-item">Financial Management (FM)</li>
            </ul>
          </div>
          <div className="duration">
            <h2>6 papers</h2>
          </div>
        </div>
        <div className="concepts-card">
          <div className="concepts-heading">
            <h1>Professional Levell</h1>
          </div>
          <div>
            <ul className="learn-list-container">
              <h3>Compulsory</h3>
              <li className="learn-list-item">
                SBL - Strategic Business Leader
              </li>
              <li className="learn-list-item">
                SBR - Strategic Business Reporting
              </li>
              <h3>Two out of the following</h3>
              <li className="learn-list-item">
                Advanced Financial Management (AFM)
              </li>
              <li className="learn-list-item">
                Advanced Performance Management (APM)
              </li>
              <li className="learn-list-item">FAdvanced Taxation (ATX))</li>
              <li className="learn-list-item">
                Advanced Audit and Assurance (AAA)
              </li>
            </ul>
          </div>
          <div className="duration">
            <h1>4papers</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default YouwillLearn
