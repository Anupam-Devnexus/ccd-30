import React, { useRef, useState } from 'react';

const Blog = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  const handleInput = () => {
    setContent(editorRef.current.innerHTML);
  };

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <div className="flex gap-2 mb-2">
        <button onClick={() => formatText('bold')} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Bold</button>
        <button onClick={() => formatText('italic')} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Italic</button>
        <button onClick={() => formatText('underline')} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Underline</button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="min-h-[150px] border p-4 rounded shadow bg-white focus:outline-none"
        suppressContentEditableWarning={true}
      ></div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-1">HTML Output:</h3>
        <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">{content}</pre>
      </div>
    </div>
  );
};

export default Blog;
