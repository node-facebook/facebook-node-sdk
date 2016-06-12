import Promise = require("any-promise");

type HTTPMethods = "get" | "post" | "delete";

export interface FacebookOptions {
    accessToken?: string;
    appId?: string;
    appSecret?: string;
    version?: string;
    proxy?: string;
    timeout?: number;
    scope?: string;
    redirectUri?: string;
    Promise?: any;
}

export interface LoginUrlOptions {
    appId?: string;
    client_id?: string;
    redirectUri?: string;
    redirect_uri?: string;
    scope?: string;
    display?: string;
    state?: string;
    responseType?: string;
    response_type?: string;
}

export class Facebook {
    api(path: string): Promise<any>;
    api(path: string, callback: (response: any) => void): void;
    api(path: string, params: any): Promise<any>;
    api(path: string, params: any, callback: (response: any) => void): void;
    api(path: string, method: HTTPMethods): Promise<any>;
    api(path: string, method: HTTPMethods, callback: (response: any) => void): void;
    api(path: string, method: HTTPMethods, params: any): Promise<any>;
    api(path: string, method: HTTPMethods, params: any, callback: (response: any) => void): void;
    napi(path: string, callback?: (error: any, response: any) => void): void;
    napi(path: string, params: any, callback?: (error: any, response: any) => void): void;
    napi(path: string, method: HTTPMethods, callback?: (error: any, response: any) => void): void;
    napi(path: string, method: HTTPMethods, params: any, callback?: (error: any, response: any) => void): void;
    getAccessToken(): string;
    setAccessToken(token: string): void;
    parseSignedRequest(signedRequest: string, appSecret?: string): any;
    getLoginUrl(options?: LoginUrlOptions): string;
    options(): FacebookOptions;
    options(optionName: string): any;
    options(optionsDict: FacebookOptions): void;
    extend(options: FacebookOptions): Facebook;
    withAccessToken(token: string): Facebook;
}

export default new Facebook;
export var FB: Facebook;
export var version: string;

export class FacebookApiException {
    name: string;
    message: string;
    response: any;
}