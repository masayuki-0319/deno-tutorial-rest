import { Application, Router } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

const app = new Application();
const port = 5000;
const router = new Router();

router.get('/api/v1/activities', ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: 'activities',
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log('server is running : http://localhost:5000');

await app.listen({ port });
