import APIKit from "./Apikit";
const statusCode = {
  success: 0,
  failure: 1,
  unAuthenticated: 2,
};

export const APIMethod = {
  GET(url, data) {
    if (navigator.onLine) {
      return APIKit.get(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((data) => {
          if (data.status === 200) {
            return {
              result: data.data,
              status: statusCode.success,
            };
          } else if (data.status === 403 || data.status === 401) {
            return {
              result: { message: data.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { data: data, message: "request failed" },
              status: statusCode.failure,
            };
          }
        })
        .catch((e) => {
          if (e.response.status === 403 || e.response.status === 401) {
            return {
              result: {message: e.response.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: {data: e.response.data.data, message: e.response.data.message },
              status: statusCode.failure,
            };
          }
        });
    } else {
      return {
        result: { message: "Please check your internet connection." },
        status: statusCode.failure,
      };
    }
  },
  PUT(url, data) {
    if (navigator.onLine) {
      return APIKit.put(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((data) => {
          if (data.status === 200) {
            return {
              result: data.data,
              status: statusCode.success,
            };
          } else if (data.status === 403 || data.status === 401) {
            return {
              result: { message: data.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { message: "request failed" },
              status: statusCode.failure,
            };
          }
        })
        .catch((e) => {
          if (e.response.status === 403 || e.response.status === 401) {
            return {
              result: { message: e.response.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { message: e.response.data.message },
              status: statusCode.failure,
            };
          }
        });
    } else {
      return {
        result: { message: "Please check your internet connection." },
        status: statusCode.failure,
      };
    }
  },
  POST(url, data) {
    if (navigator.onLine) {
      return APIKit.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((data) => {
          if (data.status === 200) {
            return {
              result: data.data,
              status: statusCode.success,
            };
          } else if (data.status === 403 || data.status === 401) {
            return {
              result: { message: data.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { message: "request failed" },
              status: statusCode.failure,
            };
          }
        })
        .catch((e) => {
          if (e.response.status === 403 || e.response.status === 401) {
            return {
              result: { message: e.response.data.message },
              status: statusCode.unAuthenticated,
            };
          }
          return {
            result: {
              message: e.response.data.message,
              data: e.response.data.data,
            },
            status: statusCode.failure,
          };
        });
    } else {
      return {
        result: { message: "Please check your internet connection." },
        status: statusCode.failure,
      };
    }
  },
  DELETE(url, data) {
    if (navigator.onLine) {
      return APIKit.delete(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: data,
      })
        .then((data) => {
          if (data.status === 200) {
            return {
              result: data.data,
              status: statusCode.success,
            };
          } else if (data.status === 403 || data.status === 401) {
            return {
              result: { message: data.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { message: "request failed" },
              status: statusCode.failure,
            };
          }
        })
        .catch((e) => {
          if (e.response.status === 403 || e.response.status === 401) {
            return {
              result: { message: e.response.data.message },
              status: statusCode.unAuthenticated,
            };
          } else {
            return {
              result: { message: e.response.data.message },
              status: statusCode.failure,
            };
          }
        });
    } else {
      return {
        result: { message: "Please check your internet connection." },
        status: statusCode.failure,
      };
    }
  },
};
