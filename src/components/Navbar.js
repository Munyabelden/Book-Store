import { NavLink } from 'react-router-dom';
import logo from './assets/person-logo.png';
import './styles/Navbar.css'

const Links = [
  { path: '/', component:'Books'},
  { path: '/category', component: 'Category'},
];

const Navbar = () => {
  return (
    <nav className="navigation">
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          {Links.map(link => {
            return (
              <li key={link.path}>
                <NavLink to={link.path}>{link.component}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <img src={logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
