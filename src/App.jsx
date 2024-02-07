import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [expolorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(expolorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={expolorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
