import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const Preview = ({ text }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(text);
    return { __html: rawMarkup };
  };

  return (
    <div className="previewWrap">
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />;
    </div>
  );
};

export default Preview;
