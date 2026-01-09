export default defineEventHandler((event) => {
  const id = event.context.params?.id

  return {
    id,
    name: `User ${id}`,
    role: "User"
  }
})