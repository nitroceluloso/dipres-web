
import axios, { AxiosRequestConfig } from "axios";
import { defaultThen, handleError } from "./Axios.helper";

export class AxiosFacade {

    static get<T>(url: string, params: T): Promise<T> {
        const request: AxiosRequestConfig = {
            method: "get",
            url,
            params
        }

        return axios(request)
            .then(defaultThen())
            .catch(handleError());
    }

    static post<T>(url: string, data: T): Promise<T> {
        const request: AxiosRequestConfig = {
            method: "get",
            url,
            data
        }

        return axios(request)
            .then(defaultThen())
            .catch(handleError());
    }

    static put<T>(url: string, data: T): Promise<T> {
        const request: AxiosRequestConfig = {
            method: "put",
            url,
            data
        }

        return axios(request)
            .then(defaultThen())
            .catch(handleError());
    }

    static del<T>(url: string, data: T): Promise<T> {
        const request: AxiosRequestConfig = {
            method: "delete",
            url,
            data
        }

        return axios(request)
            .then(defaultThen())
            .catch(handleError());
    }

}