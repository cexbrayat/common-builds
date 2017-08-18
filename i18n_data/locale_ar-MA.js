/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
import { Plural } from '@angular/common';
export default [
    'ar-MA',
    [
        ['ص', 'م'],
        ,
    ],
    [['ص', 'م'], , ['صباحًا', 'مساءً']],
    [
        ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
        ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        ,
    ],
    ,
    [
        ['ي', 'ف', 'م', 'أ', 'م', 'ن', 'ل', 'غ', 'ش', 'ك', 'ب', 'د'],
        [
            'يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو', 'يوليوز', 'غشت', 'شتنبر', 'أكتوبر',
            'نونبر', 'دجنبر'
        ],
    ],
    ,
    [['ق.م', 'م'], , ['قبل الميلاد', 'ميلادي']], 6, [5, 6],
    ['d‏/M‏/y', 'dd‏/MM‏/y', 'd MMMM، y', 'EEEE، d MMMM، y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    [
        '{1} {0}',
        ,
        ,
    ],
    [',', '.', ';', '‎%‎', '‎+', '‎-', 'E', '×', '‰', '∞', 'ليس رقمًا', ':'],
    ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'د.م.‏', 'درهم مغربي',
    function (n) {
        if (n === 0)
            return Plural.Zero;
        if (n === 1)
            return Plural.One;
        if (n === 2)
            return Plural.Two;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
            return Plural.Few;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
            return Plural.Many;
        return Plural.Other;
    }
];
//# sourceMappingURL=locale_ar-MA.js.map