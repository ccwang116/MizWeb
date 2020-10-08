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


// acer 的 request 寫法
import axios from 'axios';
const request = (method, url, options) =>
axios({
    method,
    url,
    ...options,
})
.then(async (response) => {
    const statusCode = get(response, "data.header.status", null);
    if (statusCode !== null && statusCode !== "OK" && url.indexOf("/member/login-status") < 0) {
        if (statusCode === "M2003" || statusCode === "M2010") {
            console.log(`${url}: ${statusCode}. Should Logout, options: ${JSON.stringify(options)}`);
            const token = await renewToken(generateRandomString());
            options.headers.Authorization = `Bearer ${token}`;
            console.log(`url: ${url}, options: ${JSON.stringify(options)}`);
            const data = await request(method, url, options);
            console.log(`url: ${url} - OK!`);
            return {
                status: data.status,
                data: data.data,
                headers: data.headers,
            };
        } else {
            console.log(`${url}: ${statusCode}`);
        }
    }

    return {
        status: response.status,
        data: response.data,
        headers: response.headers,
    }; 
})
.catch(error => {
    if (!error.response) {
        return {
            status: 500,
        };
    }
    return {
        status: error.response.status,
    };
});

export default request;
// ------------------------------------------
export const postClubAnalyticReportsAPI = (data, access_token) =>
    request(
        'POST',
        `${domain}/club/analytic-reports/${data.club_id}?start_at=${data.start_at}&end_at=${data.end_at}`,
        {
            headers: {
            'Content-Type': 'text/csv',
            Authorization: `Bearer ${access_token}`,
            },
            responseType: 'blob'
        }
    );
// ------------------------------------------
const getFormdata = ()=>{
  let data = {
    club_id: +club.club_id,
    start_at:'202009020300',
    end_at:'202009291600'
  };
  fetchListener.current = from(apiWithTokenWrapper(postClubAnalyticReportsAPI,data)
  ).subscribe(res => {
      
      if (+res.status === 200 ) {
          const fileName = 'test'
          const blob = new Blob([res.data],{type: res.headers['content-type']})
          const dd = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = dd
          a.download = fileName
          document.body.appendChild(a)
          a.click()
      }
  });
}