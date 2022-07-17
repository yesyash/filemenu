import React from "react";

// types
import { IDirStructure } from "@/types/dirStructure";

// components
import { File } from "@/components/ui/file";
import { Folder } from "@/components/ui/folder";

interface IFileMenu {
    data: IDirStructure;
}

export const FileMenu: React.FC<IFileMenu> = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(data.name === "app");

    if (data.type === "file") {
        return <File name={data.name} />;
    } else {
        return (
            <>
                <Folder
                    name={data.name}
                    isOpen={isOpen}
                    setOpen={() => setIsOpen((prev) => !prev)}
                />

                <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                    {data.children?.map((i) => (
                        <FileMenu key={i.name} data={i} />
                    ))}
                </div>
            </>
        );
    }
};
