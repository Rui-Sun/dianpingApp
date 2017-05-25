const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const homeAd = require('./datas/homeAd');
const homeList = require('./datas/homeList');
const router = new Router();

router.get('/api/homead', (ctx, next) => {
  ctx.body = homeAd;
});

router.get('/api/list/:city/:page', (ctx, next) => {
  console.log(ctx.params);
  const params = ctx.params;
  const paramsCity = params.city;
  const paramsPage = params.page;

  console.log('当前城市：' + paramsCity);
  console.log('当前页数：' + paramsPage);

  ctx.body = homeList;
});

app.use(router.routes());

app.listen(8800);

console.log('app started at port 8800...');
