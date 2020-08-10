function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('get', url);

  xhr.onload = () => {
    if (xhr.status !== 200) {
      errorCallback(xhr);
    } else {
      successCallback(xhr.response);
    }
  };

  xhr.error = () => errorCallback(xhr);

  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
