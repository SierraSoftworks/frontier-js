var MemoryStore = require('./stores/MemoryStore'),
	API = require('./api'),
	Express = require('./express'),
	SocketIO = require('./socket.io');

module.exports = Application;

function Application(options) {
	/// <summary>Creates a new Frontier Application</summary>
	/// <param nane="options" type="Object">Configuration options for your application</param>

	this.server = options.server;

	this.appid = options.id;
	this.privatekey = options.privatekey;
	this.callback = options.callback;

	this.store = options.store || new MemoryStore();
	this.sessionCookie = options.sessionCookie !== undefined ? options.sessionCookie : '_frontier';
	this.sessionHeader = options.sessionHeader !== undefined ? options.sessionHeader : 'x-frontier';
}

Application.prototype = {
	get api() {
		return (this.api = API(this));
	},
	get express() {
		return (this.express = Express(this));
	},
	get socket_io() {
		return (this.io = SocketIO(this));
	},
	get primus() {
		return (this.io = SocketIO(this));
	}
};