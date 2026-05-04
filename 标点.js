const txt = this.cells[1];
if (!txt) return;

let clean = txt
    .replace(/\ufeff/g, '')
    .replace(/—/g, '-')
    .replace(/·/g, '.')
    .replace(/　/g, ' ')
    .replace(/…/g, '...')
    .replace(/‘/g, "'")
    .replace(/’/g, "'")
    .replace(/“/g, '"')
    .replace(/”/g, '"');

this.cells[1] = clean;