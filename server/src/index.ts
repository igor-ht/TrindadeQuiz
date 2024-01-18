import { port } from './config';
import server from './server';

const startServer = async () => {
	server.listen(port, () => console.log(`Server is running on http://localhost:${port}/`));
};

startServer().catch(console.error);
