import axios, { AxiosInstance } from "axios";
import { Valuation } from "../core/types";

export interface ApiConfig {
    url: string;
    timeout: number;
}
/**
 * EncordAPI Class
 *
 * A class that wraps around Axios to provide simplified usage for interacting with the Encord API.
 * has standard REST methods for making requests directly to the encord API.
 *
 * @param {ApiConfig} config - Configuration options for setting up the API client.
 * @param {string} config.url - The base URL for the API.
 * @param {number} config.timeout - The timeout duration in milliseconds for API requests.
 */
export class BelongAPI {
    axios: AxiosInstance;
    config: ApiConfig;
    get: AxiosInstance["get"];
    post: AxiosInstance["post"];
    patch: AxiosInstance["patch"];
    put: AxiosInstance["put"];
    delete: AxiosInstance["delete"];

    /**
     * Creates and assigns an instance of axios configured with the config passed to the constructor.
     *
     * @constructor
     * @param {ApiConfig} config - The configuration object for the API client.
     */
    constructor(config: ApiConfig) {
        this.config = config;
        this.axios = axios.create({
            baseURL: this.config.url,
            timeout: this.config.timeout,
            headers: {
                Accept: "application/json",
            },
        });

        this.get = this.axios.get;
        this.post = this.axios.post;
        this.patch = this.axios.patch;
        this.put = this.axios.put;
        this.delete = this.axios.delete;
    }

    async fetchValuations() {
        const result = await this.get<Valuation>("valuations");
        const { data } = result;
        if (data) {
            return {
                success: true,
                valuations: data,
            };
        } else {
            return {
                success: false,
                error: "failed to fetch valuations data"
            }
        }
    }

    async fetchTransactions() {
        const result = await this.get<Valuation>("transactions");
        const { data } = result;
        if (data) {
            return {
                success: true,
                transactions: data,
            };
        } else {
            return {
                success: false,
                error: "failed to fetch transactions data"

            }
        }
    }
}

export const belongApi = new BelongAPI({
    url: "https://b4aayk6lub.execute-api.eu-west-2.amazonaws.com/belong/",
    timeout: 10000,
});
