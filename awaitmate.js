module.exports = function mate(x, args) {
  return new Promise(resolve => {
     x(...args).then((data) => {
         data.err = false;
         resolve(data);
     }).catch((reason) => {
         resolve({
             err: true,
             errmsg: reason
         });
     });
  });
}