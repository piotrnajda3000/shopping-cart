// Make a Promise compatibile with the React.Suspense API

export function createResource(asyncFn) {
  // we start defining our resource is on a pending status
  let status = "pending";
  // and we create a variable to store the result
  let result = "";
  // then we immediately start running the `asyncFn` function
  // and we store the resulting promise
  const promise = asyncFn().then(
    (r) => {
      // once it's fulfilled we change the status to success
      // and we save the returned value as result
      status = "success";
      result = r;
    },
    (e) => {
      // once it's rejected we change the status to error
      // and we save the returned error as result
      status = "error";
      result = e;
    }
  );
  // lately we return an error object with the read method
  return {
    read() {
      // here we will check the status value
      switch (status) {
        case "pending":
          // if it's still pending we throw the promise
          // throwing a promise is how Suspense know our component is not ready
          throw promise;
        case "error":
          // if it's error we throw the error
          throw result;
        case "success":
          // if it's success we return the result
          return result;
      }
    },
  };
}

export function wrapPromise(promise) {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
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
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }
      return result;
    },
  };
}
