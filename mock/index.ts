import Mock from 'mockjs'
import Menu from './result/menu.json'

Mock.mock('/mock/getMenu', {
  code: 200,
  data: Menu
})