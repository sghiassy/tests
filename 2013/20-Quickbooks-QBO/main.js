#! /usr/local/bin/node

var fs = require('fs');
var banking = require('banking');

// banking.parseOfxFile('checking.ofx', function(res, err) {
// 	if(err) throw err;
// 	
// 	//Do the conversion on OFX
// 	res.OFX.SIGNONMSGSRSV1.SONRS.FI.FID = 3106;
// 	res.OFX.SIGNONMSGSRSV1.SONRS.FI.ORG = "AMEX";
// 
// 	fs.writeFile('test.txt', JSON.stringify(res), function(err) {
// 		if(err) throw err;
// 
// 		console.log('Converted');
// 	});
// });

banking.parseOfxFile('checking.qfx', function(res, err) {
	if(err) throw err;
	
	//Do the conversion on OFX
	res.OFX.SIGNONMSGSRSV1.SONRS.INTUBID = 3106;
	res.OFX.SIGNONMSGSRSV1.SONRS.FI.FID = 3106;
	res.OFX.SIGNONMSGSRSV1.SONRS.FI.ORG = "AMEX";

	fs.writeFile('checking.qbo', JSON.stringify(res), function(err) {
		if(err) throw err;

		console.log('Converted');
	});
});