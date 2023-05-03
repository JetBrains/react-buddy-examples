export enum Sex {
  MAN = "Man",
  WOMAN = "Woman"
}

export type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  isAlive: boolean
  sex: Sex
}