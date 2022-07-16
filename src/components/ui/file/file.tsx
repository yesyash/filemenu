interface IFile {
  name: string;
}

export const File: React.FC<IFile> = ({ name }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>📄</span>
      <p>{name}</p>
    </div>
  );
};
