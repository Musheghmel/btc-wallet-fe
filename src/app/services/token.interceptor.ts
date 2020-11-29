import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {LoggerService} from './logger.service';
import {StorageService} from './storage.service';
import {AuthService} from './auth.service';
import {environment} from "../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    env = environment;
    constructor(private storage: StorageService,
                private logger: LoggerService,
                private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService) {
    }

    static constructErrorMessage(responseBody): string {
        return responseBody.message;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Authorization')) {
            const token = this.storage.getItem('token');
            let walletsCount = +this.storage.getItem('walletsCount');
            if (!walletsCount) {
                walletsCount = this.env.defaultWalletsCount;
            }

            if (token) {
                req = req.clone({
                    setHeaders: {
                        'Authorization': `${token}:${walletsCount}`
                    }
                });
            }
        }

        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    if (event.body instanceof Blob) {
                        return event;
                    }

                    const elapsed = Date.now() - started;
                    this.logger.debug(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                    if (event.body.status === false) {
                        if (event.body.code === 401) {
                            this.unauthorizedHandler();
                        } else {
                            const messageText = TokenInterceptor.constructErrorMessage(event.body);
                            throw new Error(messageText);
                        }
                    } else {
                        event = event.clone({body: event.body.result});
                        return event;
                    }
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    throw new Error('Network Error');
                }
            });
    }

    private unauthorizedHandler(): void {
        this.authService.logout();
        location.reload();
    }
}
