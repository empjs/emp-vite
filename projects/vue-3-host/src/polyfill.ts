// 针对 Android 7 及以下的 polyfill
import 'core-js/modules/es.promise'; // Promise
import 'core-js/modules/es.array.includes'; // Array.prototype.includes
import 'core-js/modules/es.string.includes'; // String.prototype.includes
import 'core-js/modules/es.object.assign'; // Object.assign
import 'core-js/modules/es.array.iterator'; // 迭代器（for...of）
import 'core-js/modules/web.dom-collections.iterator'; // DOM 迭代（如 NodeList.forEach）

import 'core-js/modules/es.promise.all-settled'; // Promise.allSettled
import 'core-js/modules/es.array.find'; // Array.prototype.find
import 'core-js/modules/es.object.entries'; // Object.entries