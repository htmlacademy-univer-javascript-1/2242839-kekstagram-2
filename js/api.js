const URL = {
    GET: 'https://26.javascript.pages.academy/kekstagram/data',
    POST: 'https://26.javascript.pages.academy/kekstagram'
  };

  const getData = (onSuccess, onFail) => {
    fetch(URL.GET)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          onFail();
        }
      })
      .then((data) => {
        onSuccess(data);
      })
      .catch(() => {
        onFail();
      });
  };

  const sendData = (onSuccess, onFail, body) => {
    fetch(
      URL.POST,
      {
        method: 'POST',
        body,
      }
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        }
        else {
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
  };

  export { getData, sendData };
