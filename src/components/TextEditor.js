import React, { useState, useMemo, useCallback } from "react";
import { createEditor, Transforms, Editor } from "slate";
import { Slate, Editable, withReact, } from "slate-react";
import { CodeElement, DefaultElement } from "./";

export default function TextEditor() {
  // const editor = useMemo(() => withReact(createEditor(), []));
  const editor = useMemo(() => withReact(createEditor()), []);
  const [content, setContent] = useState([
    {
      type: "paragraph",
      children: [{ text: "asdsa" }],
    },
  ]);


  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "samp":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);



  return (
    <div>
      <Slate
        editor={editor}
        value={content}
        onChange={(newValue) => setContent(newValue)}
      >
        <Editable
          renderElement={renderElement}
          onKeyDown={(event) => {
            if (event.key === '`' && event.ctrlKey) {
              //previne que a letra seja digitada
              event.preventDefault();
              //substitui
              editor.insertText("and")
              Transforms.setNodes(
                editor,
                { type: 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
            }
          }}
        />
      </Slate>
    </div>
  );
}
