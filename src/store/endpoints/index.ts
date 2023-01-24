import type { ApiClient, IApiClientReqOptions } from '@services/api-client';

interface IEndpointsCreateHandlerConfig extends Pick<IApiClientReqOptions, 'isCached'> {
  method?: 'GET' | 'POST';
}

interface IEndpointsCreateHandlerOptions
  extends Omit<IApiClientReqOptions, 'isCached' | 'isSkipRenew'> {
}

/**
 * Backend API endpoints
 */
class Endpoints {
  /**
   * API client
   */
  public readonly apiClient: ApiClient;

  /**
   * @constructor
   */
  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;

    apiClient.setEndpoints(this);
  }

  /**
   * Create endpoint handler
   */
  private createHandler =
    <TInput, TOutput>(
      method: string,
      { isCached, method: type }: IEndpointsCreateHandlerConfig = {},
    ) =>
      (params?: TInput, options: IEndpointsCreateHandlerOptions = {}) =>
        this.apiClient.sendRequest<TOutput>(method, params, {
          isCached,
          ...options,
          request: { ...(options?.request ?? {}), method: type },
        });

  backend = {};
}

export default Endpoints;
