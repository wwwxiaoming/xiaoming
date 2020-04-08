//遇到一个小问题，我们的资讯时间的数据是 UnixTime 格式的，我们希望显示为便于阅读的格式。
//
// 框架提供了一种快速扩展的方式，只需在 app/extend 目录下提供扩展脚本即可，具体参见扩展。
//
// 在这里，我们可以使用 View 插件支持的 Helper 来实现：
const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();