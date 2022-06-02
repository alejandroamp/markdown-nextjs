import { marked } from "marked";

const TextEditor = ({ text, setText }) => {
  return (
    <div className="editorWrap">
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="100"
        rows="40"
      />
    </div>
  );
};

export default TextEditor;
