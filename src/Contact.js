import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(null);
  function copyMail() {
    setCopied("copied!");
    console.log("copied");
  }

  return (
    <div>
      <CopyToClipboard text={"yuriyoonkim@gmail.com"}>
        <button onClick={copyMail}>yuriyoonkim@gmail.com</button>
      </CopyToClipboard>
      <p>{copied}</p>
    </div>
  );
}
