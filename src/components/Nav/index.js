import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/resume'>Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;