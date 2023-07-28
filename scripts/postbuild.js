const fs = require('fs');

fs.writeFileSync('./esm/package.json', JSON.stringify({
    "type": "module"
}, null, 2));