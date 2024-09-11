import UserForm from '../components/userForm/UserForm'
import './home.css';

const Home = () => {
  return (
     <div className="home-container">
          <nav className="sidebar">
              <img src="/TSLogo.png" alt="Logo" className="logo" />
              <UserForm />
          </nav>
          <section className="fotoCrm">
              <img src="/Home1.png" alt="Foto Panel CRM" className="panelCrm" />
          </section>
     </div>
  );
};


export default Home;
