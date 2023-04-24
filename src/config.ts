import { config } from 'dotenv';
config();


export const INITIAL_CONFIG = {
	MONGO_DB: {
		path: process.env.DB_URI || 'mongodb://127.0.0.1:27017/ExperienciasMemorables',
		production: process.env.DB_URI ? true : false
	},
	SECRET_KEY: process.env.SECRET_KEY || 'test',
	Cloudinary: {
		cloud_name: process.env.CL_NAME,
		api_key: process.env.CL_API_KEY,
		api_secret: process.env.CL_API_SECRET
	}
};
