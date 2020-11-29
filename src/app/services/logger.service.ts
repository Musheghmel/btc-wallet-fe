import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';


@Injectable()
export class LoggerService {
    debug(args?: any) {
        if (!environment.production) {
            this.invokeConsoleMethod('debug', args);
        }
    }

    info(args: any) {
        this.invokeConsoleMethod('info', args);
    }

    warning(args: any) {
        this.invokeConsoleMethod('warning', args);
    }

    error(args: any): void {
        this.invokeConsoleMethod('error', args);
    }

    private invokeConsoleMethod(type: string, message: any): void {
        let style = 'color: #000000';
        switch (type) {
            case 'debug':
                style = 'color: #00cd00';
                break;
            case 'warning':
                style = 'color: #ffcc66';
                break;
            case 'error':
                style = 'color: #ff3300';
                break;
            case 'info':
                style = 'color: #2d64f5';
                break;
            default:
                break;
        }

        if (typeof message !== 'object') {
            console.log(`%c ${message}`, `${style}`);
        } else {
            console.log(message);
        }
    }
}
