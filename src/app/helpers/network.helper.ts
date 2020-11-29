import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Utl} from './utl';


@Injectable()
export class NetworkHelper {

    constructor(private http: HttpClient) {
    }

    static prepareHttpOptions(customToken?: string): HttpHeaders {
        const headerObj = {};

        if (customToken) {
            headerObj['Authorization'] = `${customToken}`;
        }

        return new HttpHeaders(headerObj);
    }

    get<T>(url, jsonData?, customToken?: string): Observable<T> {
        const headers: any = NetworkHelper.prepareHttpOptions(customToken);

        let params: HttpParams = new HttpParams();
        if (!Utl.isNullOrUndefined(jsonData)) {
            const keys = Object.keys(jsonData);
            for (const key of keys) {
                params = params.set(key, jsonData[key]);
            }
        }
        return this.http.get<any>(url, {headers, params});
    }

    getOut<T>(url, jsonData?): Observable<T> {
        let params: HttpParams = new HttpParams();
        if (!Utl.isNullOrUndefined(jsonData)) {
            const keys = Object.keys(jsonData);
            for (const key of keys) {
                params = params.set(key, jsonData[key]);
            }
        }
        return this.http.get<any>(url, {params, headers: new HttpHeaders({})});
    }

    post<T>(url: string, data: any, customToken?: string): Observable<T> {
        const headers: any = NetworkHelper.prepareHttpOptions(customToken);
        return this.http.post<T>(url, data, {headers});
    }

    put<T>(url: string, data: any, customToken?: string): Observable<any> {
        const headers: any = NetworkHelper.prepareHttpOptions(customToken);
        return this.http.put<T>(url, data, {headers});
    }

    patch<T>(url: string, data: any, customToken?: string): Observable<any> {
        const headers: any = NetworkHelper.prepareHttpOptions(customToken);
        return this.http.patch<T>(url, data, {headers});
    }

    delete<T>(url: string, jsonData: any, customToken?: string): Observable<any> {
        const headers: any = NetworkHelper.prepareHttpOptions(customToken);

        let params: HttpParams = new HttpParams();
        if (!Utl.isNullOrUndefined(jsonData)) {
            const keys = Object.keys(jsonData);
            for (const key of keys) {
                if (jsonData[key] !== null) {
                    params = params.set(key, jsonData[key]);
                }
            }
        }

        return this.http.delete<T>(url, {headers, params});
    }
}
