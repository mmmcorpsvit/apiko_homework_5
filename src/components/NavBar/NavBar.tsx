import React, {Fragment} from "react";
import "./style.scss";


export const NavBar: React.FC = (props) => {
    return (
        <Fragment>
            {/*<nav className="main-menu" id="header">*/}
            <div className="navbar">
                {props.children}
            </div>
            {/*</nav>*/}
        </Fragment>
    )
};

// export default NavBar;
