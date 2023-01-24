import type { Manager } from '@lomray/react-mobx-manager';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { API_DOMAIN, DEFAULT_APP_LANGUAGE } from '@constants/index';
import i18n from '@services/localization';
import Endpoints from '@store/endpoints';

export interface IApiClientReqOptions {
  isCached?: boolean;
  request?: AxiosRequestConfig;
}

interface IApiClientParams {
  headers?: Record<string, any>;
}

/**
 * API client service
 */

class ApiClient {
  /**
   * API Endpoints
   * @private
   */
  private endpoints: Endpoints;

  /**
   * Mobx store manager
   * @private
   */
  private storeManager: Manager;

  /**
   * Client language
   * @private
   */
  private lang: string = DEFAULT_APP_LANGUAGE;

  /**
   * Request headers
   * @private
   */
  private readonly headers?: Record<string, any>;

  /**
   * @constructor
   */
  constructor({ headers }: IApiClientParams = {}) {
    this.headers = headers;

    i18n.on('languageChanged', (lng) => {
      this.lang = lng;
    });
  }

  /**
   * @private
   */
  private getHeaders(): Record<string, any> | undefined {
    return this.headers;
  }

  /**
   * Set API endpoints
   */
  public setEndpoints(endpoints: Endpoints): void {
    this.endpoints = endpoints;
  }

  /**
   * Set store manager
   */
  public setStoreManager(manager: Manager): void {
    this.storeManager = manager;
  }

  /**
   * Handle network and other internal errors
   * @private
   */
  private static handleInternalError(e: AxiosError): Error {
    const { message, response, code } = e || {};
    let errMessage = message;

    // api timeout
    if (code === 'ECONNABORTED' && message.includes('timeout')) {
      errMessage = i18n.t('translation:timeoutError');
    } else if (!response && message === 'Network Error') {
      errMessage = i18n.t('translation:noInternetError');
    }

    console.info(e);

    return new Error(errMessage);
  }

  /**
   * Send request to API
   */
  public async sendRequest<TResponse>(
    method: string,
    params?: any,
    options: IApiClientReqOptions = {},
  ): Promise<TResponse> {
    const { request = {} } = options;

    try {
      const { id, query, params: dataParams } = params ?? {};
      const url = [
        'api',
        method,
        id,
        query && `?${qs.stringify(query, { encodeValuesOnly: true })}`,
      ]
        .filter(Boolean)
        .join('/');

      const { data } = await axios.request({
        baseURL: API_DOMAIN,
        method: 'GET',
        url: `/${url}`,
        headers: {
          ...this.getHeaders(),
          ...{
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        },
        data: dataParams,
        ...request,
      });

      return data as TResponse;
    } catch (e) {
      return {
        error: ApiClient.handleInternalError(e as AxiosError),
      } as unknown as TResponse;
    }
  }
}

interface IInitApiParams {
  headers?: Record<string, any>;
}

/**
 * Init api client
 */
const initApi = ({ headers }: IInitApiParams = {}) => {
  const apiClient = new ApiClient({ headers });
  const endpoints = new Endpoints(apiClient);

  return { apiClient, endpoints };
};

export { initApi, ApiClient };
