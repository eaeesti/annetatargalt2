import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Anchor from "../elements/Anchor";

export default function Markdown({ children, className }) {
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkGfm]}
      className={className}
      components={{
        a(props) {
          const { children, href, node, ...rest } = props;
          const newTab = href.startsWith("http");
          return (
            <Anchor href={href} newTab={newTab} {...rest}>
              {children}
            </Anchor>
          );
        },
      }}
    />
  );
}