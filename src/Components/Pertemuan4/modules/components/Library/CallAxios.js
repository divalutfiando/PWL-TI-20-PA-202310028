import axios from "axios";

async function CallAxios(value) {
  var config = {
    method: value.method,
    url: value.url,
    headers: value.headers,
    data: value.data,
  };

  let response = await axios(config)
    .then(function (response) {
      var result = response.data;
      return result;
    })
    .catch(function (e) {
      var message = "";
      if ("message" in e) {
        message = e.code + ": " + e.message + " to "+value.url;
      }
      var result = { error: message, redirect: false };
      return result;
    });
  return response;
}

export default CallAxios;