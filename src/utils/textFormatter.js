export const formatBold = text =>
  '*' + text + '*';

export const formatItalic = text =>
  '_' + text + '_';

export const formatStrike = text =>
  '~' + text + '~';

export const formatBoldItalic = text =>
  '_*' + text + '*_';

export const formatQuoteLine = text =>
  '>' + text + '\n';

export const formatCodeBlock = text =>
  '```' + text + '```';

export const formatCodeInline = text =>
  '`' + text + '`';
