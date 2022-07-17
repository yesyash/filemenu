import React from "react";

interface IFolder {
    name: string;
    isOpen: boolean;
    setOpen: () => void;
}

export const Folder: React.FC<IFolder> = ({ name, isOpen, setOpen }) => {
    return (
        <div
            className="flex items-center gap-2 py-1 lg:py-0.5 w-max hover:bg-neutral-200 rounded pl-1 pr-2 transition duration-200"
            onClick={setOpen}
        >
            <span>{isOpen ? "📂" : "📁"}</span>
            <p>{name}</p>
        </div>
    );
};
