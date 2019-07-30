interface FBOptions {
    accessToken: string;
    appId: string;
    appSecret: string;
    version?: string;
    proxy?: string;
    timeout?: number;
    scope?: string;
    redirectUri?: string;
    Promise?: Promise<any>;
}

interface SignedRequestResponse {
    oauthToken: string;
    userId: string;
    userCountry: string;
}

interface UsageInterface {
    callCount: number;
    totalTime: number;
    totalCPUTime: number;
}

interface FBError {
    name: string;
    message: string;
    response: number;
}

interface FBResponseObject {
    data: any;
    error: any;
}

export class Facebook {
    constructor(options?: FBOptions);

    api(path: string): Promise<any>;

    api(path: string, method: string): Promise<any>;

    api(path: string, params: any): Promise<any>;

    api(path: string, method: string, params: any): Promise<any>;

    extend(options: FBOptions): Facebook;

    getAccessToken(): string;

    getAppUsage(): UsageInterface;

    getPageUsage(): UsageInterface;

    getLoginUrl(options: FBOptions): string;

    napi(path: string): void;

    napi(path: string, method: string): void;

    napi(path: string, params: any): void;

    napi(path: string, method: string, params: any): void;

    options(): FBOptions;

    options(key: string): string;

    options(options: FBOptions): void;

    parseSignedRequest(signedRequest: string, appSecret: string): SignedRequestResponse;

    setAccessToken(accessToken: string): void;

    withAccessToken(accessToken: string): Facebook;
}

export const version: string;

export function FacebookApiException(res: FBResponseObject): FBError;

export const FB: Facebook;
