import StormDB from 'stormdb';
const engine = new StormDB.localFileEngine('./db.stormdb');
const db = new StormDB(engine);

db.default({
	users: [],
	recipes: [],
	reviews: [],
});

db.save();

export default db;
