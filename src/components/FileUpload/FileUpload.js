import { Button } from '@material-ui/core';
import React from 'react';

import TotalVisitsChart from '../TotalVisitsChart/TotalVisitsChart';
import './FileUpload.css';

const FileUpload = () => {
  const fileInput = React.useRef(null);
  const [chartData, setChartData] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', fileInput.current.files[0]);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => setChartData(result.slice(0, 5)))
      .catch(error => console.log(error));
  }

  return (
    <div style={{ width: "50%" }} >
      <form className="file-upload-form" onSubmit={handleSubmit}>
        <input accept="application/JSON" id="file" required type="file" ref={fileInput} />
        <Button type="submit" variant="contained" color="primary">Upload</Button>
      </form>

      {!!chartData.length && <h2 className="chart-title">Total Visits</h2>}

      {!!chartData.length && <TotalVisitsChart chartData={chartData} />}
    </div>
  );
}

export default FileUpload;
