import Mock from 'mockjs'
import Menu from './result/menu.json'
import Cookies from 'js-cookie'

Mock.setup({
  timeout: 600
})

Mock.mock('/mockJs/getMenu', {
  code: 200,
  data: Menu,
  msg: 'success'
})

Mock.mock('/mockJs/getPermission', 'get', (options) => {
  const data = [Cookies.get('token')]
  return {
    code: 200,
    data,
    msg: 'success'
  }
})

Mock.mock('/mockJs/login', 'post', (options: any) => {
  const body = JSON.parse(options.body)
  if (body.account !== 'admin') {
    return { code: 400, data: null, msg: '账号有误' }
  }
  if (body.password !== 'admin') {
    return { code: 400, data: null, msg: '密码有误' }
  }
  return {
    code: 200,
    data: {
      token: 'admin'
    },
    msg: 'success'
  }
})

Mock.mock('/mockJs/userInfo', {
  code: 200,
  data: {
    account: 'admin',
    nickName: '管理员',
    phone: 13975900000,
    avatar: 'https://picx.zhimg.com/v2-afcb9403f5e4769e411f95dc9685100f_r.jpg?source=1940ef5c',
    postTitle: '前端工程师',
    email: '123456@qq.com'
  },
  msg: 'success'
})
