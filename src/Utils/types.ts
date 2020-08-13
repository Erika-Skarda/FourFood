export enum Types {
  SET_MESSAGE = '@router/SET_MESSAGE',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}
export interface Message {

  message: string
  color: string
}
export interface Login {

  email:string
  password:string

}