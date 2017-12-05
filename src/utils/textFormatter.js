/**
 * Format bold text
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatBold = text => '*' + text + '*';

/**
 * Format italic text
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatItalic = text => '_' + text + '_';

/**
 * Format bold and italic text
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatBoldItalic = text => '*_' + text + '_*';

/**
 * Format text with a strike through
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatStrike = text => '~' + text + '~';

/**
 * Format a single line quote
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatQuoteLine = text => '>' + text + '\n';

/**
 * Format inline code
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatCodeInline = text => '`' + text + '`';

/**
 * Format code block
 * @param {string} text text to be formatted
 * @returns {string}    formatted string
 */
export const formatCodeBlock = text => '```' + text + '```';
