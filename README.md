## 使用Proxy封装所有的 RESTful API

**proxy-axios依赖于axios,对axios的调用进行了封装**

```javascript
npm install proxy-axios --save;

import {api, axios} from 'proxy-axios';

api下提供各种api封装，axios可用于添加全局请求配置，拦截器，并发请求等

api.get()
// GET /

api.getUsers()
// 获取所有用户
// GET /users

api.getUsers$Books(42)
// 获取 ID 为 42 的用户的所有书籍
// GET /users/42/books

api.getUsers$Books(42, { params: { page: 2 } })
// 获取 ID 为 42 的用户的所有书籍的第二页
// GET /users/42/books?page=2

api.postUsers({ data: { name: '小明' } })
// 创建名字为 小明 的用户
// POST /users Payload { name: '小明' }

api.getUpload_profile$Book(22, { params: { id: 10 } })
// Get /uploadProfile/22/book?id=10
```