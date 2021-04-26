import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./components/ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  // アロー関数だと再レンダリングされた際に再定義され、結果props変更と判断され子コンポーネントも再レンダリングされる
  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input valiue={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* 親が再レダリングされても open が変わらない限り再レンダリングしたくない */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
