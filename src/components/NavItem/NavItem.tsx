import React from "react";
import {Link} from "react-router-dom";


import "./style.scss";
// import {INavItem} from './types';
// interface NavNestedItemProps extends MainMenuSubItem {
//     children?: NavNestedItemProps[];
//     hideOverlay?(): void;
// }

export interface INavItem {
    // __typename: "Navigation item";

    path: string;
    caption: string;
    // chldren?: any;  // not use
    children?: void;
}

// export type NavItems = INavItem[];
// export interface NavItems extends Array<INavItem>{}

export const NavItem: React.FC<INavItem> = (props) => {
    return (
        // <a className="active" href="<props.link>">props.text</a>
        <Link to={props.path}>
            {props.caption}
        </Link>
    );
};

// export default NavItem;
