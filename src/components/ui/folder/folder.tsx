import React from "react";

interface IFolder {
    name: string;
    isOpen: boolean;
    setOpen: () => void;
}

export const Folder: React.FC<IFolder> = ({ name, isOpen, setOpen }) => {
    return (
        <div
            className="flex items-center gap-2 p-0.5 cursor-default"
            onClick={setOpen}
        >
            <span>{isOpen ? "📂" : "📁"}</span>
            <p>{name}</p>
        </div>
    );
};
