import React from "react";

interface ILayout {
    children: React.ReactNode;
}
export const Layout: React.FC<ILayout> = ({ children }) => {
    return <div className="mx-auto max-w-7xl">{children}</div>;
};
