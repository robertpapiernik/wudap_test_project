import { Button } from '@material-ui/core';
import React from 'react';

import './FileUpload.css';

const FileUpload = () => {
  const fileInput = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fileInput.current.files[0]);

    // const formData = new FormData();
    // formData.append('file', fileInput.current.files[0]);
    // fetch('', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));
  }

  return (
    <form className="file-upload-form" onSubmit={handleSubmit}>
      <input id="file" required type="file" ref={fileInput} />
      <Button type="submit" variant="contained" color="primary">Upload</Button>
    </form>
  )
}

export default FileUpload
