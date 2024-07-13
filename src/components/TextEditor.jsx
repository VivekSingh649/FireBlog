import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor({
  editorRef,
  handleEditorChange,
  initialValue = "Write your blog content here...",
}) {
  return (
    <>
      <Editor
        apiKey="802adbao7qmse7otfvqdnjzcs4j3vh86axbry4hij8v0iujs"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "a11ychecker",
            "advlist",
            "advcode",
            "advtable",
            "autolink",
            "checklist",
            "export",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "powerpaste",
            "fullscreen",
            "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist image outdent indent | removeformat | a11ycheck code table help media",
          content_style:
            "body { font-family:Poppins, sans-serif; font-size:16px }",
        }}
        onEditorChange={(content, editor) => handleEditorChange(content)}
      />
    </>
  );
}
