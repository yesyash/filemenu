interface IFolder {
  open: boolean;
  name: string;
}

export const Folder: React.FC<IFolder> = ({ open, name }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>{open ? "📂" : "📁"}</span>
      <p>{name}</p>
    </div>
  );
};
