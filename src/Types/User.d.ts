export interface IUser {
  account: string
  nickName?: string
  phone?: number | string
  avatar?: string
  email?: string
  postTitle?: string
}

export interface ILoginParam {
  userName: string
  password: string
}