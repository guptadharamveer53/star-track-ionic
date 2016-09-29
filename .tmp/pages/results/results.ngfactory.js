/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './results';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-params';
import * as import9 from '../../providers/spotify-service/spotify-service';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from 'ionic-angular/components/list/list';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../pipes/moment';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import33 from 'ionic-angular/components/item/item';
import * as import34 from '@angular/core/src/linker/query_list';
import * as import35 from 'ionic-angular/components/thumbnail/thumbnail';
import * as import36 from 'ionic-angular/components/note/note';
import * as import37 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import38 from 'ionic-angular/util/form';
import * as import39 from '@angular/core/src/security';
var renderType_ResultsPage_Host = null;
var _View_ResultsPage_Host0 = (function (_super) {
    __extends(_View_ResultsPage_Host0, _super);
    function _View_ResultsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultsPage_Host0, renderType_ResultsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-results', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ResultsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ResultsPage_0_4 = new import3.ResultsPage(this.parentInjector.get(import8.NavParams), this.parentInjector.get(import9.SpotifyService), this.parentInjector.get(import10.NavController));
        this._appEl_0.initComponent(this._ResultsPage_0_4, [], compView_0);
        compView_0.create(this._ResultsPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ResultsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ResultsPage) && (0 === requestNodeIndex))) {
            return this._ResultsPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ResultsPage_Host0;
}(import1.AppView));
function viewFactory_ResultsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResultsPage_Host === null)) {
        (renderType_ResultsPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_ResultsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ResultsPageNgFactory = new import12.ComponentFactory('page-results', viewFactory_ResultsPage_Host0, import3.ResultsPage);
var styles_ResultsPage = [];
var renderType_ResultsPage = null;
var _View_ResultsPage0 = (function (_super) {
    __extends(_View_ResultsPage0, _super);
    function _View_ResultsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultsPage0, renderType_ResultsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import25.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import15.ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Results', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import26.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import16.Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import17.List(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_13 = new import2.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import31.TemplateRef_(this._appEl_13, viewFactory_ResultsPage1);
        this._NgFor_13_6 = new import18.NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import32.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15
            ]),
            []
        ], null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._pipe_moment_0 = new import19.Moment();
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16
        ], [], []);
        return null;
    };
    _View_ResultsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import14.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import31.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import18.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6;
        }
        if (((token === import17.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._List_11_3;
        }
        if (((token === import16.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ResultsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_3 = this.context.listing;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgFor_13_6.ngForOf = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgFor_13_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_13_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ResultsPage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ResultsPage0;
}(import1.AppView));
export function viewFactory_ResultsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResultsPage === null)) {
        (renderType_ResultsPage = viewUtils.createRenderComponentType('/Users/mhartington/GitHub/StarTrack-Ionic/.tmp/pages/results/results.html', 0, import11.ViewEncapsulation.None, styles_ResultsPage, {}));
    }
    return new _View_ResultsPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ResultsPage1 = (function (_super) {
    __extends(_View_ResultsPage1, _super);
    function _View_ResultsPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultsPage1, renderType_ResultsPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultsPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'a', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'detail-none', '');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import37.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import33.Item(this.parent.parentInjector.get(import38.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import33.ItemContent();
        this._query_Label_0_0 = new import34.QueryList();
        this._query_Button_0_1 = new import34.QueryList();
        this._query_Icon_0_2 = new import34.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-thumbnail', null);
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this._Thumbnail_2_3 = new import35.Thumbnail();
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'img', null);
        this.renderer.setElementAttribute(this._el_4, 'alt', '');
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'h2', null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(null, '\n      ', null);
        this._el_10 = this.renderer.createElement(null, 'h3', null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(null, '\n      ', null);
        this._el_13 = this.renderer.createElement(null, 'p', null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(null, '\n      ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-note', null);
        this.renderer.setElementAttribute(this._el_16, 'item-right', '');
        this._Note_16_3 = new import36.Note();
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_6,
                this._el_7,
                this._text_9,
                this._el_10,
                this._text_12,
                this._el_13,
                this._text_15,
                this._text_18
            ]),
            [],
            [].concat([this._el_16])
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._pipe_moment_0_0 = import4.pureProxy1(this.parent._pipe_moment_0.transform.bind(this.parent._pipe_moment_0));
        this._expr_5 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18
        ], [disposable_0], []);
        return null;
    };
    _View_ResultsPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Thumbnail) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Thumbnail_2_3;
        }
        if (((token === import36.Note) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Note_16_3;
        }
        if (((token === import33.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Item_0_4;
        }
        if (((token === import33.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_ResultsPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_1 = this.context.$implicit.album.images[0].url;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import39.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_8, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.artists[0].name, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_11, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.album.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_14, currVal_4);
            this._expr_4 = currVal_4;
        }
        valUnwrapper.reset();
        var currVal_5 = import4.interpolate(1, '\n        ', valUnwrapper.unwrap(import4.castByValue(this._pipe_moment_0_0, this.parent._pipe_moment_0.transform)(this.context.$implicit.duration_ms)), '\n      ');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_5, currVal_5))) {
            this.renderer.setText(this._text_17, currVal_5);
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ResultsPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.detail(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_ResultsPage1;
}(import1.AppView));
function viewFactory_ResultsPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultsPage1(viewUtils, parentInjector, declarationEl);
}