import { NavLink } from 'react-router-dom';

const Links = [
    { path: '/', component:'Books'},
    { path: '/category', component: 'Category'}
]

const Navbar = () => {
    return (
      <nav className="navigation">
        <h1>Book Store</h1>
        <ul>
            {Links.map(link => {
                return(<li key={link.path}>
                    <NavLink to={link.path}>{link.component}</NavLink>
                </li>);
            })}
        </ul>
      </nav>
    );
}

export default Navbar
