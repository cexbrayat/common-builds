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
import { Inject, Injectable, Optional } from '@angular/core';
import { Location } from './location';
import { APP_BASE_HREF, LocationStrategy } from './location_strategy';
import { PlatformLocation } from './platform_location';
/**
 * \@description
 * A {\@link LocationStrategy} used to configure the {\@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * \@usageNotes
 *
 * ### Example
 *
 * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 *
 */
export class HashLocationStrategy extends LocationStrategy {
    /**
     * @param {?} _platformLocation
     * @param {?=} _baseHref
     */
    constructor(_platformLocation, _baseHref) {
        super();
        this._platformLocation = _platformLocation;
        this._baseHref = '';
        if (_baseHref != null) {
            this._baseHref = _baseHref;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onPopState(fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    }
    /**
     * @return {?}
     */
    getBaseHref() { return this._baseHref; }
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    path(includeHash = false) {
        /** @type {?} */
        let path = this._platformLocation.hash;
        if (path == null)
            path = '#';
        return path.length > 0 ? path.substring(1) : path;
    }
    /**
     * @param {?} internal
     * @return {?}
     */
    prepareExternalUrl(internal) {
        /** @type {?} */
        const url = Location.joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? ('#' + url) : url;
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    pushState(state, title, path, queryParams) {
        /** @type {?} */
        let url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.pushState(state, title, url);
    }
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    replaceState(state, title, path, queryParams) {
        /** @type {?} */
        let url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.replaceState(state, title, url);
    }
    /**
     * @return {?}
     */
    forward() { this._platformLocation.forward(); }
    /**
     * @return {?}
     */
    back() { this._platformLocation.back(); }
}
HashLocationStrategy.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HashLocationStrategy.ctorParameters = () => [
    { type: PlatformLocation },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [APP_BASE_HREF,] }] }
];
if (false) {
    /** @type {?} */
    HashLocationStrategy.prototype._baseHref;
    /** @type {?} */
    HashLocationStrategy.prototype._platformLocation;
}
//# sourceMappingURL=hash_location_strategy.js.map