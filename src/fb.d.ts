interface FBOptions {
    accessToken: string;
    appId: string;
    appSecret: string;
    version?: string;
    proxy?: string;
    timeout?: number;
    scope?: string;
    redirectUri?: string;
    Promise?: Promise;
}

export class Facebook {
    constructor(options: FBOptions);

    api(...args): Promise<any>;

    extend(options: FBOptions): Facebook;

    getAccessToken(): string;

    getLoginUrl(): string;

    napi(...args): Promise<any>;

    options(keyOrOptions: FBOptions): FBOptions;

    parseSignedRequest(signedRequest: string, ...args): Object;

    setAccessToken(accessToken: string): void;

    withAccessToken(accessToken: string): any;
}

export const version: string;

export function FacebookApiException(res: Response): void;

export const FB: Facebook;
