
/**
 * Return the payload of the response to the next then
 * @param flagCheckLoading boolean to check if the loading will be displayed
 */
export const defaultThen = (flagCheckLoading: boolean = true) => {
    return (resp?: any): Promise<any>  => {
        // if(flagCheckLoading) checkApiCallStatus(false);
        return new Promise((resolve) => {
            resolve((resp.data && resp.data) || false)
        });
    }
}

/**
 * Return the payload of the response to the next then
 * @param flagCheckLoading boolean to check if the loading will be displayed
 */
export const handleError = (flagCheckLoading: boolean = true, json?: any) => {

    return (resp?: any): Promise<any> => {
        // if(flagCheckLoading) checkApiCallStatus(false);

        // const statusCode = resp.response.data.status;
        // if(statusCode === "ERROR") store.dispatch(setError(resp.response.data.payload));

        return new Promise((resolve) => {
            // const data = transalatePayload(statusCode, resp.response.data, json)
            resolve(resp.response.data);
        });
    }
}