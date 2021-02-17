const tcb = require('tcb-admin-node');
tcb.init({
  env: tcb.getCurrentEnv() // 示例使用客户端所使用的环境ID，可以手动指定
});
const db = tcb.database();

exports.main = async (event, context) => {
  const res = await db.collection('all_users')
    .where({
      name:event.name,
      password:event.password
    })
    .get();
    if(res.data.length>0){
      return {
        code:200,
        data:res.data,
        msg:'操作成功'
      }
    }else{
      return {
        code:-1,
        data:[],
        msg:'账号异常'
      }
    }
};