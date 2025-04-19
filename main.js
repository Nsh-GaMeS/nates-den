const express = require('express');
const app = express();
const port = 80;

// ASCII banner (you can use something fancy from http://patorjk.com/software/taag/)
const asciiBanner = `
	#        ___          ___      ___          ___          ___                   ___         ___          ___
	#       /\__\        /\  \    /\  \        /\  \        /\  \                 /\  \       /\  \        /\__\
	#      /::|  |      /::\  \   \:\  \      /::\  \      /::\  \               /::\  \     /::\  \      /::|  |
	#     /:|:|  |     /:/\:\  \   \:\  \    /:/\:\  \    /:/\ \  \             /:/\:\  \   /:/\:\  \    /:|:|  |
	#    /:/|:|  |__  /::\~\:\  \  /::\  \  /::\~\:\  \  _\:\~\ \  \           /:/  \:\__\ /::\~\:\  \  /:/|:|  |__
	#   /:/ |:| /\__\/:/\:\ \:\__\/:/\:\__\/:/\:\ \:\__\/\ \:\ \ \__\         /:/__/ \:|__/:/\:\ \:\__\/:/ |:| /\__\
	#   \/__|:|/:/  /\/__\:\/:/  /:/  \/__/\:\~\:\ \/__/\:\ \:\ \/__/         \:\  \ /:/  |:\~\:\ \/__/\/__|:|/:/  /
	#       |:/:/  /      \::/  /:/  /      \:\ \:\__\   \:\ \:\__\            \:\  /:/  / \:\ \:\__\      |:/:/  /
	#       |::/  /       /:/  /\/__/        \:\ \/__/    \:\/:/  /             \:\/:/  /   \:\ \/__/      |::/  /
	#       /:/  /       /:/  /               \:\__\       \::/  /               \::/  /     \:\__\        /:/  /
	#       \/__/        \/__/                 \/__/        \/__/                 \/__/       \/__/        \/__/
`;
app.get('/', (req, res) => {
	const userAgent = req.get('User-Agent') || '';
	if (userAgent.includes('curl')) {
		res.set('Content-Type', 'text/plain');
		res.send(asciiBanner + '\nWelcome to my terminal site!\nVisit: https://yourdomain.com\n');
	} else {
		res.send('<h1>Welcome to my website!</h1>');
	}
});

app.listen(port, () => {
	console.log(`ASCII server running on port ${port}`);
});
