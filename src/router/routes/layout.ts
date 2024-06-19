/* eslint-disable @typescript-eslint/no-explicit-any */
import { PAGE_NOT_FOUND_ROUTE } from '~/router/routes/basic'

const modules = import.meta.glob<{ default: any }>('./modules/**/*.ts', {
  eager: true,
})
const routeModuleList: any = []

// Add modules to the route list
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const allRoutes = [...routeModuleList, PAGE_NOT_FOUND_ROUTE]

// Export all routes
export default allRoutes
