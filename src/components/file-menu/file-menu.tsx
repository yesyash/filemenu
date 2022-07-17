import React from "react";
import { File, Folder } from "../ui";
import { IDirStructure } from "@/types/dirStructure";

export const FileMenu = ({ data }: { data: IDirStructure }) => {
    const [isOpen, setIsOpen] = React.useState(false);

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
