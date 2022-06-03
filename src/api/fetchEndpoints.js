import { USER_SERVER } from "config";

// fetchEndpoints (method,Endpoint,BaseURL)
export default function fetchEndpoints(
  method = "GET",
  endpoint,
  baseurl = USER_SERVER,
  options = {
    method: `${method}`,
    headers: [
      {
        name: "Authorization",
        value: `Bearer ${localStorage.getItem("token")}`,
      },
    ],

    credentials: "same-origin",
  }
) {
  const requestURL = baseurl + `${endpoint}`;
  const requestHeaders = new Headers();

  options.headers &&
    options.headers.map((header) => {
      requestHeaders.append(header.name, header.value);
    });

  let driveRequest;
  if (!options.body) {
    driveRequest = new Request(requestURL, {
      method: options.method,
      headers: requestHeaders,
    });
  } else {
    driveRequest = new Request(requestURL, {
      method: options.method,
      headers: requestHeaders,
      body: options.body,
    });
  }

  return fetch(driveRequest).then((response) => {
    if (response.ok && response.status === 200) {
      return response.json();
    }
    throw response.status;
  });
}
