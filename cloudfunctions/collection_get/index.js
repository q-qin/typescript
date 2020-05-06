const tcb = require('tcb-admin-node');
tcb.init({
  env: tcb.getCurrentEnv() // 示例使用客户端所使用的环境ID，可以手动指定
});
const db = tcb.database();
exports.main = async (event, context) => {
  console.log(`[event]：${JSON.stringify(event)},[context]：${JSON.stringify(context)}`);
  return await db.collection(event.database)
    .where({
      condition: event.condition || {}
    })
    .get();
};
