import { Application, Router } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

const app = new Application();
const port = 5000;
const router = new Router();

let activities = [
  {
    activity: 'Learn how to write in shorthand',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: '',
    link: '',
    id: '6778219',
  },
  {
    activity: 'Learn how to french braid hair',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: '',
    link: '',
    id: '8926492',
  },
  {
    activity: 'Compliment someone',
    accessibility: 0.0,
    type: 'social',
    participants: 2,
    price: '',
    link: '',
    id: '9149470',
  },
];

router.get('/api/v1/activities', ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: activities,
  };
});

router.get('/api/v1/activities/:id', ({ params, response }: { params: { id: string }; response: any }) => {
  const activity = activities.find((p) => p.id === params.id);
  console.log(activity);

  if (activity) {
    response.status = 200;
    response.body = {
      success: true,
      data: activity,
    };
  } else {
    response.status = 404;
    response.body = {
      success: true,
      data: 'Not found Activity.',
    };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log('server is running : http://localhost:5000');

await app.listen({ port });
