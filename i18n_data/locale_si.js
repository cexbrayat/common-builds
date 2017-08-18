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
    'si',
    [
        ['පෙ', 'ප'],
        ['පෙ.ව.', 'ප.ව.'],
    ],
    [
        ['පෙ.ව.', 'ප.ව.'],
        ,
    ],
    [
        ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
        ['ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා', 'බ්‍රහස්', 'සිකු', 'සෙන'],
        [
            'ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා',
            'සෙනසුරාදා'
        ],
        ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන']
    ],
    ,
    [
        ['ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ', 'නෙ', 'දෙ'],
        [
            'ජන', 'පෙබ', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්',
            'නොවැ', 'දෙසැ'
        ],
        [
            'ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු',
            'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'
        ]
    ],
    [
        ['ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ', 'නෙ', 'දෙ'],
        [
            'ජන', 'පෙබ', 'මාර්', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
            'දෙසැ'
        ],
        [
            'ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු',
            'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'
        ]
    ],
    [
        ['ක්‍රි.පූ.', 'ක්‍රි.ව.'], ,
        ['ක්‍රිස්තු පූර්ව', 'ක්‍රිස්තු වර්ෂ']
    ],
    1, [6, 0], ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
    ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'],
    [
        '{1} {0}',
        ,
        ,
    ],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
    ['#,##0.###', '#,##0%', '¤#,##0.00', '#'], 'රු.',
    'ශ්‍රී ලංකා රුපියල',
    function (n) {
        var i = Math.floor(Math.abs(n)), f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (n === 0 || n === 1 || i === 0 && f === 1)
            return Plural.One;
        return Plural.Other;
    }
];
//# sourceMappingURL=locale_si.js.map