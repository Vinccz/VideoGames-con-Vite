import { Link } from "react-router-dom"
/* import SearchBar from '../searchbar/SearchBar' */


function NavBar() {

    return (
        <div>

        <Link to={'/home'}>
            <button>Home</button>
        </Link>
        <input type="text"
        placeholder="Buscar..."
/>
        <button type="submit">Buscar</button>
        </div>

        
    )

}

export default NavBar;