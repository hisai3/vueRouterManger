let arr = []
let r = require.context('../module2', true, /\.vue/)
// window.console.log(r.keys())
r.keys().forEach(key => {
  var _keyarr = key.split('.')
  if(key.indexOf('index') != -1) {
    arr.push({
      path: _keyarr[1],
      component: r(key).default
    })
  }else {
    window.console.log(r(key).default,'module1.default')
    arr.push({
      path: _keyarr[1]+'/'+_keyarr[2],
      component: r(key).default
    })
  }
});

export default arr
