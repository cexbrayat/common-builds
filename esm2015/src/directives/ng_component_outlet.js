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
import { ComponentFactoryResolver, Directive, Injector, Input, NgModuleFactory, NgModuleRef, Type, ViewContainerRef } from '@angular/core';
/**
 * Instantiates a single {\@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * \@usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 * A more complete example with ngModuleFactory:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
 *
 * \@experimental
 * \@ngModule CommonModule
 */
export class NgComponentOutlet {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._componentRef = null;
        this._moduleRef = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._viewContainerRef.clear();
        this._componentRef = null;
        if (this.ngComponentOutlet) {
            /** @type {?} */
            const elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (changes['ngComponentOutletNgModuleFactory']) {
                if (this._moduleRef)
                    this._moduleRef.destroy();
                if (this.ngComponentOutletNgModuleFactory) {
                    /** @type {?} */
                    const parentModule = elInjector.get(NgModuleRef);
                    this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                }
                else {
                    this._moduleRef = null;
                }
            }
            /** @type {?} */
            const componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                elInjector.get(ComponentFactoryResolver);
            /** @type {?} */
            const componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._moduleRef)
            this._moduleRef.destroy();
    }
}
NgComponentOutlet.decorators = [
    { type: Directive, args: [{ selector: '[ngComponentOutlet]' },] },
];
/** @nocollapse */
NgComponentOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];
NgComponentOutlet.propDecorators = {
    ngComponentOutlet: [{ type: Input }],
    ngComponentOutletInjector: [{ type: Input }],
    ngComponentOutletContent: [{ type: Input }],
    ngComponentOutletNgModuleFactory: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutlet;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletInjector;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletContent;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletNgModuleFactory;
    /** @type {?} */
    NgComponentOutlet.prototype._componentRef;
    /** @type {?} */
    NgComponentOutlet.prototype._moduleRef;
    /** @type {?} */
    NgComponentOutlet.prototype._viewContainerRef;
}
//# sourceMappingURL=ng_component_outlet.js.map