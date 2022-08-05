// Create resource from an async function
export function createResource(asyncFn) {
  let status = "pending";
  let result = "";
  const promise = asyncFn().then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      switch (status) {
        case "pending":
          throw promise;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
}

// Create resource from a promise
export function wrapPromise(promise) {
  let status = "pending";
  let result = "";
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
}
