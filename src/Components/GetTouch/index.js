import './index.css'

const GetTouch = () => (
  <div className="form-container">
    <h1 className="form-heading">
      Aspiring to be an ACCA? Get in touch with us!
    </h1>
    <div>
      <form>
        <div className="input-elemt">
          <input
            className="input"
            name="PhoneNumber"
            placeholder="Phone Numbers*"
          />
        </div>
        <div className="input-elemt">
          <input className="input" name="email" placeholder="Email" />
        </div>
        <div className="select form">
          <select
            className="select-container"
            placeholder="Current Qulification"
          >
            <option className="option" value="0">
              Current Qulification
            </option>
            <option className="option" value="1">
              CA
            </option>
            <option className="option" value="2">
              Bcom
            </option>
            <option className="option" value="3">
              CS
            </option>
            <option className="option" value="4">
              CMA
            </option>
            <option className="option" value="5">
              Other
            </option>
          </select>
        </div>
        <div>
          <select className="select-container">
            <option className="option" value="0">
              Intrested in
            </option>
            <option>ACCA Level I</option>
            <option>ACCA Level II</option>
            <option>ACCA Level III</option>
          </select>
        </div>
        <button type="submit" className="callback-btn">
          Request Call Back
        </button>
      </form>
    </div>
  </div>
)

export default GetTouch
