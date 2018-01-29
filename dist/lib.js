/*!
 * {LIB} v0.0.6
 * (c) 2018 {NAME}
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function stringNormalize(string) {
    // in order: double quotation marks, single quotation marks and apostrophes, commas
    return string.replace(/[\u201C\u201D\u02DD]/g, '\u0022').replace(/[\u00B4\u0060\u2018\u2019\u0301\u02BB\u02C8]/g, '\u0027').replace(/[\u02CC\u201A\uFF0C]/g, '\u002C');
}

exports.stringNormalize = stringNormalize;
