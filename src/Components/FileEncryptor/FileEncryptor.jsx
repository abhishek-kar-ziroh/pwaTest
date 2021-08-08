import { useState } from "react";
import Navbar from "../Navbar/Navbar"

const FileEncryptor = () => {

    const [selectedFile, setSelectedFile] = useState("");

    const handleClick = async () => {
        let fileHandle;
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
const contents = await file.text();

setSelectedFile(contents);

};

async function getNewFileHandle() {
    const options = {
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    return handle;
  }

const encryptFile = async () => {
    const handle = await getNewFileHandle();
    await handle.requestPermission().then(res => console.log(res));
    const writable = await handle.createWritable();
    const contents = btoa(selectedFile)
  await writable.write(contents);
  await writable.close();
  setSelectedFile(contents);
}

    return (
        <div>
            <Navbar></Navbar>
            <div className="encryptor__element">
                <div className="file__selector" onClick={handleClick}>Select File</div>
                <div className="file__contents">{selectedFile}</div>
                <button onClick={encryptFile}>Encrypt</button>
            </div>
        </div>
     );
}
 
export default FileEncryptor;