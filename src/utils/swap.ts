type Swap = {
    list: string[]
    draggedId: string
    id: string
}
export const swap = ({ list, draggedId, id }: Swap) => {
  const dragIndex = list.indexOf(draggedId)
  const targetIndex = list.indexOf(id)
  list[dragIndex] = id
  list[targetIndex] = draggedId
  return list
}
