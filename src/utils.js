import { v4 } from "uuid"

export const getId = () => {
  const id = v4()
  return id
}