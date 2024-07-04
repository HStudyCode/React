import React1, { useEffect } from "react";

import React from "react";

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("color was changed");
    }, [color]);

    return <div>I am Navbar of {color} color hehe....</div>;
};

export default Navbar;
