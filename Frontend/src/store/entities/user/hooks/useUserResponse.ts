import { useRecoilCallback } from 'recoil'
import { userState } from '../atom'
import { UserResponse } from '../type'

export const useUserResponse = () => {
  const setUser= useRecoilCallback(
    ({ set }) =>
      (data: UserResponse) => {
        set(userState, (prev) => {
          return {
            ...prev,
            ...data,
          }
        })
      },
    [],
  )

  return {
    setUser,
  }
}
