import React from "react";
import * as utils from "../utils";

/**
 * Custom hook to handle asynchronous requests with loading, success, and error states.
 *
 * @param {Function} action - The action function to be dispatched.
 * @param {Object} [requestOptions={}] - Optional configuration for the request.
 * @param {Function} [requestOptions.onSuccess] - Callback function to be called on successful request.
 * @param {Function} [requestOptions.onError] - Callback function to be called on request error.
 * @param {Function} [requestOptions.select] - Function to select and transform the response data.
 *
 * @returns {Object} - The state and request handler.
 * @returns {boolean} returnData.isLoading - Indicates if the request is in progress.
 * @returns {boolean} returnData.isError - Indicates if the request resulted in an error.
 * @returns {boolean} returnData.isSuccess - Indicates if the request was successful.
 * @returns {any} returnData.error - The error object if the request failed.
 * @returns {any} returnData.data - The response data if the request was successful.
 * @returns {Function} returnData.setData - Function to manually set the response data.
 * @returns {Function} returnData.request - Function to initiate the request.
 */
const useRequest = (action, requestOptions = {}) => {
  /**
   * Options for the request.
   *
   * @typedef {Object} RequestOptions
   * @property {Function} [onSuccess] - Callback function to be executed on successful request.
   * @property {Function} [onError] - Callback function to be executed on request error.
   * @property {Function} [select] - Function to transform the response data.
   * @property {Object} [requestOptions] - Additional request options to be merged.
   */
  const options = {
    onSuccess: undefined,
    onError: undefined,
    select: undefined,
    ...requestOptions,
  };

  /**
   * useRequest hook state object.
   *
   * @typedef {Object} State
   * @property {boolean} isLoading - Indicates if the request is currently loading.
   * @property {boolean} isError - Indicates if there was an error with the request.
   * @property {boolean} isSuccess - Indicates if the request was successful.
   * @property {Error|undefined} error - The error object if the request failed.
   * @property {any|undefined} data - The data returned from the request if successful.
   */
  const [state, setState] = React.useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: undefined,
    data: undefined,
  });

  /**
   * Merges the new state with the previous state.
   *
   * @function
   * @param {Object} [newState={}] - The new state to merge with the previous state.
   */
  const setMergedState = React.useCallback(
    (newState = {}) => {
      setState((prevState) => ({ ...prevState, ...newState }));
    },
    [state]
  );

  /**
   * A custom hook that handles asynchronous requests using a provided action.
   * It manages loading, success, and error states.
   *
   * @function
   * @param {...any} args - The arguments to be passed to the action.
   * @returns {Promise<any>} - The response from the dispatched action.
   * @throws {TypeError} - If the provided action is not a function.
   */
  const request = React.useCallback(
    async (...args) => {
      if (utils.isFunction(action)) {
        try {
          // Set loading state to true
          setMergedState({
            isLoading: true,
            isError: false,
            isSuccess: false,
            error: undefined,
          });
          const response = await action(...args);
          return handleSuccess(response, ...args);
        } catch (error) {
          handleError(error);
        }
      } else {
        throw new TypeError("Request must be an action");
      }
    },
    [action, options]
  );

  /**
   * Handles the success response of a request.
   *
   * @callback handleSuccess
   * @param {Object} response - The response object from the request.
   * @param {...any} args - Additional arguments passed to the callback.
   * @returns {Object} The processed response object.
   * @throws {Error} If the select function does not return a value.
   */
  const handleSuccess = React.useCallback(
    (response, ...args) => {
      const { onSuccess, select } = options;
      let cloneResponse = structuredClone(response);
      if (utils.isFunction(select)) {
        const selectedResponse = select(cloneResponse, ...args);
        if (utils.isUndefined(selectedResponse)) {
          const selectError = new Error("Select function must return a value");
          setMergedState({
            isLoading: false,
            isSuccess: false,
            isError: true,
            error: selectError,
          });

          throw selectError;
        }
        cloneResponse = structuredClone(selectedResponse);
      }

      setMergedState({
        isLoading: false,
        isSuccess: true,
        error: undefined,
        data: cloneResponse,
      });

      if (utils.isFunction(onSuccess)) onSuccess(cloneResponse, ...args);
      return cloneResponse;
    },
    [action, options]
  );

  /**
   * Handles errors by updating the state and invoking the onError callback if provided.
   *
   * @param {Object} error - The error object to handle.
   */
  const handleError = React.useCallback(
    (error) => {
      const { onError } = options;

      setMergedState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        error,
      });

      if (utils.isFunction(onError)) onError(error);
    },
    [action, options]
  );

  /**
   * Sets the data in the merged state.
   *
   * @param {any} data - The data to set in the merged state.
   */
  const setData = React.useCallback(
    (data) => {
      setMergedState({ data });
    },
    [state]
  );

  /**
   * Memoized object containing the current state, setData function, and request function.
   *
   * @typedef {Object} ReturnData
   * @property {Object} state - The current state object.
   * @property {Function} setData - Function to set the data.
   * @property {Function} request - Function to make a request.
   *
   * @type {ReturnData}
   */
  const returnData = React.useMemo(() => {
    return {
      ...state,
      setData,
      request,
    };
  }, [state, request]);

  return returnData;
};

export default useRequest;
