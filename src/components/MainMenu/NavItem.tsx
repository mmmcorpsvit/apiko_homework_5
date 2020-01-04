import React from "react";

// interface NavNestedItemProps extends MainMenuSubItem {
//     children?: NavNestedItemProps[];
//     hideOverlay?(): void;
// }

const NavItem: React.FC = (props: any) => {
    return (
        <a className="active" href="<props.link>">props.text</a>
    );
};

export default NavItem;
