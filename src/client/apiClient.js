import axios from 'axios';
import { camelizeKeys } from 'humps';

const client = (endpoint, { body, method, headers, params } = {}) => {
  headers = {
    ...headers,
    'content-type': 'application/json',
    'accept': 'application/json'
  }

  const config = {
    url: `https://api.github.com/${endpoint}`,
    headers: {
      ...headers
    }
  }

  if (params) {
    config.params = params;
    config.method = "GET";
  }

  if (body) {
    config.data = body;
    config.method = method;
  }

  const onSuccess = res => {
    let data = res?.data || null;
    data = camelizeKeys(data);

    return {
      isSuccess: true,
      error: false,
      data
    }
  }

  const onError = err => {  
    let error = err?.response?.data?.error || err?.response?.data?.errors;
    error = camelizeKeys(error);

    if (error?.code === 'ECONNABORTED') error.message = 'Time Out Please Try Again!';
    if (!error?.message) error = {...error, message: 'Something weng wrong!'}

    return {
      isSuccess: false,
      data: null,
      error
    }
  }

  return axios(config)
    .then(onSuccess)
    .catch(onError);
}

export default client;