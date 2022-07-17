export type IDirStructure = {
    name: string;
    type: "folder" | "file";
    children: IDirStructure[] | null;
};
