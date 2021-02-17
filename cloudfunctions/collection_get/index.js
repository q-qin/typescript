const tcb = require('tcb-admin-node');
tcb.init({
  env: tcb.getCurrentEnv() // 示例使用客户端所使用的环境ID，可以手动指定
});
const db = tcb.database();
exports.main = async (event, context) => {
  const data = await db.collection(event.database)
    .where({
      title: event.title || ''
    })
    .get();
  return {
    code: 200,
    data: data.data,
    msg: '操作成功'
  };
};
