'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatBold = exports.formatBold = function formatBold(text) {
  return '*' + text + '*';
};

var formatItalic = exports.formatItalic = function formatItalic(text) {
  return '_' + text + '_';
};

var formatBoldItalic = exports.formatBoldItalic = function formatBoldItalic(text) {
  return '*_' + text + '_*';
};

var formatStrike = exports.formatStrike = function formatStrike(text) {
  return '~' + text + '~';
};

var formatQuoteLine = exports.formatQuoteLine = function formatQuoteLine(text) {
  return '>' + text + '\n';
};

var formatCodeInline = exports.formatCodeInline = function formatCodeInline(text) {
  return '`' + text + '`';
};

var formatCodeBlock = exports.formatCodeBlock = function formatCodeBlock(text) {
  return '```' + text + '```';
};