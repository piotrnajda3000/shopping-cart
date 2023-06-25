import { useEffect, useRef, useState } from "react";

// Create resource from an async function
export function createResource(asyncFn) {
  const state = {
    status: "pending",
    result: "",
    test: 1,
  };
  const promise = asyncFn().then(
    (r) => {
      state.status = "success";
      state.result = r;
    },
    (e) => {
      state.status = "error";
      state.result = e;
    }
  );
  return {
    status: state.status,
    result: state.result,
    state,
    read() {
      switch (state.status) {
        case "pending":
          throw promise;
        case "error":
          throw state.result;
        case "success":
          return state.result;
      }
    },
  };
}

export function useCreateResource(asyncFn, deps) {
  const [state, setState] = useState({
    status: "pending",
    result: "",
  });

  const promiseRef = useRef(new Promise(() => {}));

  useEffect(() => {
    setState({
      status: "pending",
      result: "",
    });
    promiseRef.current = asyncFn().then(
      (r) => {
        setState({
          status: "success",
          result: r,
        });
      },
      (e) => {
        setState({
          status: "error",
          result: e,
        });
      }
    );
  }, [deps]);

  return {
    status: state.status,
    result: state.result,
    state,
    read() {
      switch (state.status) {
        case "pending":
          throw promiseRef.current;
        case "error":
          throw state.result;
        case "success":
          return state.result;
        default:
          return state.result;
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
