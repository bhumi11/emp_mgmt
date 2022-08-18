import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Employees from "../employees/components/employees-list-container/employees-list.container.vue";
import EmployeesForm from "../employees/components/employees-form-container/employees-form.container.vue";

// import EmployeeFormRoutes from "../employees/router";

const routes: any = [
  {
    path: "/",
    redirect:'/employees'
  },
  {
    path: "/employees",
    name: "EmployeeListContainer",
    component: Employees,
  },
  {
    path: "/employees/add",
    name: "AddEmployeeFormContainer",
    component: EmployeesForm
  },
  {
    path: "/employees/:id",
    name: "EditEmployeeFormContainer",
    component: EmployeesForm
  },
];
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;