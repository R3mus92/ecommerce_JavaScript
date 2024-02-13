const express = require('express');
const { createServer: viteCreateServer } = require('vite');

async function createServer() {
   const app = express();
   let vite;

   if (process.env.NODE_ENV === 'development') {
    // Import Vite only in development mode
   vite = await viteCreateServer({
      server: { middlewareMode: true },
   });
   app.use(vite.middlewares);
   } else {
    // Import from dist folder in production mode
   app.use(require('compression')());
   app.use(express.static(require('path').resolve(__dirname, 'dist')));
   }

   const port = process.env.PORT || 3000;
   app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
   });
}

createServer().catch((err) => {
   console.error(err);
   process.exit(1);
});
