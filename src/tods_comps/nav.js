import React from 'react';
import { Link} from "react-router-dom"
import "../css_comps/todos.css"
function Nav(props) {
    return (
        <nav className="bg-dark">
            <div className="d-flex align-items-center justify-content-between">
                <Link to={"/"} className="text-decoration-none">Home</Link>
                <Link to={"/newTodo/"} className="text-decoration-non">Create Todo</Link>
            </div>
        </nav>
    )
}
export default Nav
