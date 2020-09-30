function downloadBlob(blob, name = 'file.csv') {
    if (
      window.navigator && 
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(blob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }
  function exportDownload() {
    const url = 'https://dz-dev.xyzcamp.com/api/club/analytic-reports/10001?start_at=202009020300&end_at=202009291600'
    const data = {}
    fetch(url, {
      method:'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': 'text/csv',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0a190eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAxNTE5Mzc3LCJpYXQiOjE2MDE0NDczNzcsIm1fc291cmNlIjoiTSIsIm1faWQiOiIyMDE5MDUwODE3NDYiLCJ1c2VybmFtZSI6InRlc3QwMDEifQ.AQnZn16i0tjdubGXlCaPvKDey0SND-pfHSvjJJGfhiA'
      },
      responseType: 'blob'
    }).then(response => response.blob())
      .then(response => downloadBlob(response, 'noAlert.xlsx'))

  }