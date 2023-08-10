export interface IUser {
  account: string
  nickName?: string
  phone?: number | string
  avatar?: string
  email?: string
  postTitle?: string
}

export interface ILoginParam {
  account: string
  password: string
}