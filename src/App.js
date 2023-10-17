import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css";
    document.head.appendChild(link);

    return () => {
      // 当组件卸载时，你可以选择移除这个<link>标签
      document.head.removeChild(link);
    };
  }, []); // 依赖数组为空，所以这个useEffect只会在挂载和卸载时运行
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
