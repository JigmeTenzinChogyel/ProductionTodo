import { useRecoilValue } from 'recoil'
import { TodoIdsByUserIdState } from '../atom'


type Result = {
    todoIds: string[]
}
export const useTodoIdsByUserId = (userId:string):Result => {
 
  const todoIds = useRecoilValue(TodoIdsByUserIdState(userId))

  return {
    todoIds,
  }
}
