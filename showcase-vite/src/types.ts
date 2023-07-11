export enum Sex {
  MAN = "Man",
  WOMAN = "Woman"
}

export type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  salary: number
  email: string
  isAlive: boolean
  profession: string
  sex: Sex
  testFunction1?: () => {}
  testFunction2?: Function
}

export type Dot = {
  x: number,
  y: number
}


export type DepartmentInfo = {
  department: string
  budgetPerYears: YearToBudget[]
}

export type YearToBudget = {
  year: number,
  budget: number
}