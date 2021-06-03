'use strict';

const axios = require('axios').default;
const to = require('await-to-js').default;
const https = require('https');
const httpContext = require('express-http-context');

exports.makeRequest = async (url, method, payload, headers = {}, meta, reject_unauthorized = true) => {
  headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/json';
  let _err = null;
  let _res = null;

  let httpsAgent;
  if (!reject_unauthorized) {
    httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }
  const reqId = httpContext.get('reqId');
  const sessionId = httpContext.get('sessionId');

  if (!headers.requestId && !headers.request_id) {
    headers.request_id = reqId || 'NO-LSQ-ID';
  }

  if (!headers.sessionId && !headers.session_id) {
    headers.session_id = sessionId || reqId || 'NO-SESSION-ID';
  }

  [_err, _res] = await to(
    axios({
      method: method,
      url: url,
      data: payload,
      headers: headers,
      httpsAgent
    })
  );

  let host = null;
  let responseBody = null;

  if (!_res || !_res.status || (_res.status !== 200 && _res.status !== 204)) {
    // console.log('\n\n\n', _res, _err, '\n\n\n');
    let message = '';
    if (_err && _err.response && _err.response.data) {
      responseBody = _err.response.data.data || _err.response.data;
      message = _err.response.data.message;
    } else {
      message = _err.message;
    }

    // host = _err.request.res.client.servername;
    host = _err.request && _err.request.res ? _err.request.res.client.servername : '';
    const m = _err.response ? _err.response.data : _err.response;
    const statusCode = _err.response ? _err.response.status : 400;
    // logger(message, method, url, payload, responseBody, statusCode, host, m, 'FAILED', reqId, sessionId);
    return {
      success: false,
      message,
      data: responseBody,
      statusCode,
      meta: m
    };
  }

  host = _res.request.res.client.servername;
  responseBody = _res.data.data || _res.data;

//   logger.info(meta, method, url, payload, responseBody, _res.status, host, responseBody, 'SUCCESS', reqId, sessionId);
  return { success: true, message: 'success', data: responseBody, statusCode: _res.status };
};

exports.internalRequest = async(url, method, payload, headers ={}, meta, reject_unauthorized = true) => {
  headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : 'application/json';
  let _err = null;
  let _res = null;

  let httpsAgent;
  if (!reject_unauthorized) {
    httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }
  const reqId = httpContext.get('reqId');
  const sessionId = httpContext.get('sessionId');

  if (!headers.requestId && !headers.request_id) {
    headers.request_id = reqId || 'NO-AFRO-ID';
  }

  if (!headers.sessionId && !headers.session_id) {
    headers.session_id = sessionId || reqId || 'NO-SESSION-ID';
  }

  [_err, _res] = await to(
    axios({
      method: method,
      url: url,
      data: payload,
      headers: headers,
      httpsAgent
    })
  );

  let host = null;
  let responseBody = null;

  if (!_res || !_res.status || (_res.status !== 200 && _res.status !== 204)) {
    // console.log('\n\n\n', _res, _err, '\n\n\n');
    let message = '';
    if (_err && _err.response && _err.response.data) {
      responseBody = _err.response.data.data || _err.response.data;
      message = _err.response.data.message;
    } else {
      message = _err.message;
    }

    // host = _err.request.res.client.servername;
    host = _err.request && _err.request.res ? _err.request.res.client.servername : '';
    const m = _err.response ? _err.response.data : _err.response;
    const statusCode = _err.response ? _err.response.status : 400;
    const response = {
      success: false,
      message,
      data: responseBody,
      statusCode,
      meta: m
    };
    // logger({...response, type:'Internal Request', reqId});
    return response;
  }

  host = _res.request.res.client.servername;
  responseBody = _res.data.data || _res.data;
  const response = { success: true, message: 'success', data: responseBody, statusCode: _res.status };
  // logger({...response, type:'Internal Request', reqId});
  return response;
}