declare class FB {
    api(path:string, callback?:(response:any) => void):void;
    api(path:string, params:any, callback?:(response:any) => void):void;
    api(path:string, method:string, params:any, callback?:(response:any) => void):void;
    napi(path:string, callback?:(error:any, response:any) => void):void;
    napi(path:string, params:any, callback?:(error:any, response:any) => void):void;
    napi(path:string, method:string, params:any, callback?:(error:any, response:any) => void):void;
    getAccessToken(): string;
    setAccessToken(token:string): void;
    parseSignedRequest(signedRequest:string, appSecret?:string): any;
    getLoginUrl(options:any): string;
    options(): any;
    options(optionName:string): any;
    options(optionsDict:any): void;
    version: string;
}

export = new FB