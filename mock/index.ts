import Mock from 'mockjs'
import Menu from './result/menu.json'

Mock.setup({
  timeout: 600
})

Mock.mock('/mock/getMenu', {
  code: 200,
  data: Menu,
  msg: 'success'
})

Mock.mock('/mock/login','post', (options: any) => {
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

Mock.mock('/mock/userInfo', {
  code: 200,
  data: {
    name: 'admin',
    phone: 17688899512
  },
  msg: 'success'
})