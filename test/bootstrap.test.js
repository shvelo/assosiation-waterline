var Sails = require('sails'),
		mocha = require('mocha'),
		chai = require('chai'),
		TEST_PORT = 1397,
		app;

chai.config.includeStack = true;

before(function (done) {

	Sails.lift({
		port: TEST_PORT,
		log: { level: 'silly' },
		hooks: {
			grunt: false
		},
		connections: {
			localDiskDb: {
				adapter: 'sails-disk'
			},
			testMongodbServer: {
				adapter: 'sails-mongo',
				host: 'localhost',
				port: 27017,
				// user: 'username',
				// password: 'password',
				database: 'ass-test'
			}
		},
		session: {
			adapter: 'memory'
		},
		models: {
			connection: 'testMongodbServer',
			migrate: 'drop'
		},
	}, function (err, server) {
		app = server;
		if (!app)
			console.error(err);
		app.log.verbose("Sails loaded?", err, server);
		if (err)
			return done(err);

		done(err, app);
	});
});

after(function (done) {
	// here you can clear fixtures, etc.
	app.lower(done);
});
