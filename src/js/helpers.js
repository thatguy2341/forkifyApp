'use strict';

import { timeoutSeconds, RESULTS_PER_PAGE } from './config';

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, dataToSend = undefined) {
  try {
    const extraFetch = dataToSend
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
        })
      : fetch(url);
    const response = await Promise.race([extraFetch, timeout(timeoutSeconds)]);
    const data = await response.json();
    if (!response.ok)
      throw new Error(
        `Problem with ${dataToSend ? 'posting' : 'getting'} data: ${
          data.message
        } (${response.status})`
      );

    return data;
  } catch (error) {
    throw error;
  }
};

export const checkIfWindowSmaller = function (size) {
  if (window.innerWidth < size) return true;
  else return false;
};

// export const getJSON = async function (url) {
//   try {
//     const response = await Promise.race([fetch(url), timeout(timeoutSeconds)]);
//     const data = await response.json();
//     if (!response.ok)
//       throw new Error(
//         `Problem with fetching: ${data.message} (${response.status})`
//       );

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const sendJSON = async function (url, dataToSend) {
//   try {
//     const response = await Promise.race([
//       fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(dataToSend),
//       }),
//       timeout(timeoutSeconds),
//     ]);
//     const data = await response.json();
//     if (!response.ok)
//       throw new Error(
//         `Problem with posting data: ${data.message} (${response.status})`
//       );

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getMaxPage = function (resultsLen) {
  return Math.ceil(resultsLen / RESULTS_PER_PAGE);
};
