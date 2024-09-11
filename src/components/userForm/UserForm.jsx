import './userForm.css';

const UserForm = () => {
  return (
    <div className="userform-container">
      <h2 className="userform-title">TrackSales CRM</h2>
      <p className="userform-subtitle">Keep your clients happy!</p>
      <form className="userform-form">
        <label htmlFor="email" className="userform-label">Email</label>
        <input type="email" id="email" className="userform-input" placeholder="Enter your email" />
        
        <label htmlFor="password" className="userform-label">Password</label>
        <input type="password" id="password" className="userform-input" placeholder="Enter your password" />
        
        <button type="submit" className="userform-button">Sign In</button>
      </form>
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
  );
}

export default UserForm;
