// client-side js
// run by the browser each time your view template is loaded
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyvS7t6LbuQP6NZw'}).base('appC3HrtsUWOBFP1R');

base('cameras').find('recWHFyexQ8ADN0Fq', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});