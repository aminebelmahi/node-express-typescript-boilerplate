import express, { Response } from 'express';

const app = express();
const PORT = 5000;

app.get('/', (res: Response) => {
    res.send('Well done!');
});

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log(`The application is listening on port ${PORT}`);
});
