import cors from 'cors';
import express from 'express';
import compression from 'compression';
import cluster from 'cluster';
import { cpus } from 'os';
import { TrabajadorRouter } from "./routes/trabajador.router";

// if (cluster.isPrimary) {
//   for (let cpu = 0; cpu < cpus().length; cpu++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log('Se ha muerto el worker %s, reiniciando', worker.process.pid);
//     cluster.fork();
//   });
// } else{
  const app = express();

  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use('/api/v1/trabajadores', TrabajadorRouter);

  const port = process.env.PORT || 2002;

  app.listen(port, () => {
    console.log(`worker ${process.pid} listening on http://localhost:${port}`);
  });
// }
