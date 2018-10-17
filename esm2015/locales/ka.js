"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
var u = undefined;
function plural(n) {
    if (n === 1)
        return 1;
    return 5;
}
exports.default = [
    'ka', [['a', 'p'], ['AM', 'PM'], u],
    [['AM', 'PM'], u, ['AM', 'შუადღ. შემდეგ']],
    [
        ['კ', 'ო', 'ს', 'ო', 'ხ', 'პ', 'შ'],
        ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
        [
            'კვირა', 'ორშაბათი', 'სამშაბათი',
            'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი',
            'შაბათი'
        ],
        ['კვ', 'ორ', 'სმ', 'ოთ', 'ხთ', 'პრ', 'შბ']
    ],
    u,
    [
        ['ი', 'თ', 'მ', 'ა', 'მ', 'ი', 'ი', 'ა', 'ს', 'ო', 'ნ', 'დ'],
        [
            'იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ',
            'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'
        ],
        [
            'იანვარი', 'თებერვალი', 'მარტი',
            'აპრილი', 'მაისი', 'ივნისი', 'ივლისი',
            'აგვისტო', 'სექტემბერი', 'ოქტომბერი',
            'ნოემბერი', 'დეკემბერი'
        ]
    ],
    u,
    [
        ['ძვ. წ.', 'ახ. წ.'], u,
        [
            'ძველი წელთაღრიცხვით',
            'ახალი წელთაღრიცხვით'
        ]
    ],
    1, [6, 0], ['dd.MM.yy', 'd MMM. y', 'd MMMM, y', 'EEEE, dd MMMM, y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, u, u],
    [
        ',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞',
        'არ არის რიცხვი', ':'
    ],
    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '₾', 'ქართული ლარი', {
        'AUD': [u, '$'],
        'CNY': [u, '¥'],
        'GEL': ['₾'],
        'HKD': [u, '$'],
        'ILS': [u, '₪'],
        'INR': [u, '₹'],
        'JPY': [u, '¥'],
        'KRW': [u, '₩'],
        'NZD': [u, '$'],
        'TWD': ['NT$'],
        'USD': ['US$', '$'],
        'VND': [u, '₫']
    },
    plural
];
//# sourceMappingURL=ka.js.map