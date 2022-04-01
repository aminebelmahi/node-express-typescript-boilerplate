import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express } from 'express';

/**
 * Function that runs express app.
 *
 * @returns Main entry express app.
 */
export const expressApp = async (): Promise<Express> => {
     const app: Express = express();

     /**
      * Middlewares.
      */
     app.use(cors());
     app.use(express.json());
     app.use(express.urlencoded({ extended: true }));
     app.use('/uploads', express.static('uploads'));
     app.use(cookieParser());
     // app.use(createSession());

     const PORT = process.env.PORT || 8000;
     app.listen(PORT, () => {
          // eslint-disable-next-line no-console
          console.log(`The application is listening on port ${PORT}`);
     });

     return app;
};
