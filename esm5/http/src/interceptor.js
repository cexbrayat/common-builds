/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, InjectionToken } from '@angular/core';
/**
 * Intercepts `HttpRequest` and handles them.
 *
 * Most interceptors will transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 *
 * In rare cases, interceptors may wish to completely handle a request themselves,
 * and not delegate to the remainder of the chain. This behavior is allowed.
 *
 *
 * @record
 */
export function HttpInterceptor() { }
/**
 * Intercept an outgoing `HttpRequest` and optionally transform it or the
 * response.
 *
 * Typically an interceptor will transform the outgoing request before returning
 * `next.handle(transformedReq)`. An interceptor may choose to transform the
 * response event stream as well, by applying additional Rx operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may choose to completely handle the request itself,
 * and compose a new event stream instead of invoking `next.handle()`. This is
 * acceptable behavior, but keep in mind further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 * @type {?}
 */
HttpInterceptor.prototype.intercept;
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var /**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
export { HttpInterceptorHandler };
if (false) {
    /** @type {?} */
    HttpInterceptorHandler.prototype.next;
    /** @type {?} */
    HttpInterceptorHandler.prototype.interceptor;
}
/** *
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 *
  @type {?} */
export var HTTP_INTERCEPTORS = new InjectionToken('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: Injectable },
    ];
    return NoopInterceptor;
}());
export { NoopInterceptor };
//# sourceMappingURL=interceptor.js.map