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
import { Attribute, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgLocalization, getPluralCategory } from '../i18n/localization';
import { SwitchView } from './ng_switch';
/**
 * \@ngModule CommonModule
 *
 * \@usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * \@description
 *
 * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * \@experimental
 */
export class NgPlural {
    /**
     * @param {?} _localization
     */
    constructor(_localization) {
        this._localization = _localization;
        this._caseViews = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngPlural(value) {
        this._switchValue = value;
        this._updateView();
    }
    /**
     * @param {?} value
     * @param {?} switchView
     * @return {?}
     */
    addCase(value, switchView) { this._caseViews[value] = switchView; }
    /**
     * @return {?}
     */
    _updateView() {
        this._clearViews();
        /** @type {?} */
        const cases = Object.keys(this._caseViews);
        /** @type {?} */
        const key = getPluralCategory(this._switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
    }
    /**
     * @return {?}
     */
    _clearViews() {
        if (this._activeView)
            this._activeView.destroy();
    }
    /**
     * @param {?} view
     * @return {?}
     */
    _activateView(view) {
        if (view) {
            this._activeView = view;
            this._activeView.create();
        }
    }
}
NgPlural.decorators = [
    { type: Directive, args: [{ selector: '[ngPlural]' },] },
];
/** @nocollapse */
NgPlural.ctorParameters = () => [
    { type: NgLocalization }
];
NgPlural.propDecorators = {
    ngPlural: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgPlural.prototype._switchValue;
    /** @type {?} */
    NgPlural.prototype._activeView;
    /** @type {?} */
    NgPlural.prototype._caseViews;
    /** @type {?} */
    NgPlural.prototype._localization;
}
/**
 * \@ngModule CommonModule
 *
 * \@description
 *
 * Creates a view that will be added/removed from the parent {\@link NgPlural} when the
 * given expression matches the plural expression according to CLDR rules.
 *
 * \@usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 * ```
 *
 * See {\@link NgPlural} for more details and example.
 *
 * \@experimental
 */
export class NgPluralCase {
    /**
     * @param {?} value
     * @param {?} template
     * @param {?} viewContainer
     * @param {?} ngPlural
     */
    constructor(value, template, viewContainer, ngPlural) {
        this.value = value;
        /** @type {?} */
        const isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
    }
}
NgPluralCase.decorators = [
    { type: Directive, args: [{ selector: '[ngPluralCase]' },] },
];
/** @nocollapse */
NgPluralCase.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['ngPluralCase',] }] },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: NgPlural, decorators: [{ type: Host }] }
];
if (false) {
    /** @type {?} */
    NgPluralCase.prototype.value;
}
//# sourceMappingURL=ng_plural.js.map