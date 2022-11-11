import './Password-recreate.css'
import logo from '../../assets/image/login_logo.png'

const ReacreatePassword = () => {
    return(
        <div className="recreate-password-container">
            <img src={logo} alt="" />
            <div className="recreate-password-box">
                <div className="recreate-box-registr">
                    <h1 className='introduction-recreate-password'>Password assistance</h1>
                    <p>Enter the email address or mobile phone number <br /> associated with your Amazon account.</p>
                <form className='recreate-password-form' action="">
                <div className="email-input-box-recreate-password">
                    <label htmlFor="email-input-recreate-password">Email or mobile phone number</label>
                <input required type="email" />
                </div>
                <button className='btn-continue-recreate-password'>Continue</button>
                </form>
                </div>
            </div>
            <h2 style={{fontWeight: "400", margin: '10px 0px'}}>Has your email or mobile number changed?</h2>
        <p style={{margin: '10px 0px'}}>If you no longer use the email address associated with your <br /> Amazon account, you may contact <span className='text-condition-recreate-password'>Customer Service</span> for <br /> help restoring access to your account.</p>
        </div>
    )
} 
export default ReacreatePassword