import axios from 'axios';
// import store from "@/store";
// import { useToast } from "vue-toastification";
// import Toaster from '@/components/toaster.vue';
// import { auth } from "@/services/auth.service";

const Http = axios.create({
    baseURL: "http://localhost:3000" 
});

// const toast = useToast();

// let requestsPending = 0;
// const req = {
//     pending: () => {
//         requestsPending++;
//         //Show Loader Code
//         store.dispatch('showLoader')
//     },
//     done: () => {
//         requestsPending--;
//         if (requestsPending <= 0) {
//             //Hide Loader Code
//             store.dispatch('hideLoader')
//         }
//     }
// };

// function errorHandler(error: any) {

//     const content = {
//         // Your component or JSX template
//         component: Toaster,

//         // Props are just regular props, but these won't be reactive
//         props: {
//             errors: error.response.data.errors,
//         },

//     };

//     switch (error.response.status) {
//         case 400:
//             toast.error(content, { timeout: false });
//             break;
//         case 404:
//             toast.error("Not Found");
//             break;
//         case 500:
//             toast.error("Something went wrong. Please try again.");
//             break;
//         case 401:
//             toast.error("Unauthorized Access");
//             auth.logout();
//             break;
//         case 403:
//             toast.error("Unauthorized Access");
//             break;
//         default:
//             toast.error("Something went wrong. Please try again.");
//             break;
//     }
// }

// function getTimeZoneOffset() {
//     const timezoneOffseMin = new Date().getTimezoneOffset();
//     const offsetHrs = parseInt(Math.abs(timezoneOffseMin / 60).toString());
//     const offsetMin = Math.abs(timezoneOffseMin % 60);
//     let timezoneStandard = "";
//     let offsetHrsStr = "";
//     let offsetMinStr = "";

//     if (offsetHrs < 10) {
//         offsetHrsStr = '0' + offsetHrs;
//     } else {
//         offsetHrsStr = offsetHrs.toString();
//     }

//     if (offsetMin < 10) {
//         offsetMinStr = '0' + offsetMin;
//     } else {
//         offsetMinStr = offsetMin.toString();
//     }

//     // Add an opposite sign to the offset
//     // If offset is 0, it means timezone is UTC
//     if (timezoneOffseMin < 0)
//         timezoneStandard = offsetHrsStr + ':' + offsetMinStr;
//     else if (timezoneOffseMin > 0)
//         timezoneStandard = '-' + offsetHrsStr + ':' + offsetMinStr;
//     else if (timezoneOffseMin === 0)
//         timezoneStandard = '00:00';

//     // Timezone difference in hours and minutes
//     // String such as 5:30 or -6:00 or 00:00
//     return timezoneStandard;
// }

// const offset = getTimeZoneOffset();

// /**
//  * handle error
//  * @param error error with status code
//  */
// function handleError(error:any){
//     req.done();
//     errorHandler(error)
//     return Promise.reject(error);
// }

// Http.interceptors.request.use(config => {
//     // const token = store.getters.getCurrentUserDetail.access_token;
//     //to-do try hiren
//     const isTokenAvailable: any = localStorage.getItem(
//         "oidc.user:"+`${process.env.VUE_APP_AUTH0_DOMAIN}`+":"+`${process.env.VUE_APP_CLIENT_ID}`
//       );
//     const updatedToken= JSON.parse(isTokenAvailable);
//     config.headers.common['Authorization'] = `Bearer ${updatedToken.access_token}`;
//     config.headers.common['api-version'] = '1.0';
//     config.headers.common['offset'] = offset;
//     if (!config.headers.hideLoader) {
//         req.pending();
//     }
//     return config;
// }, error => {
//     return handleError(error)
// });

// Http.interceptors.response.use(response => {
//     // perform a task before the response is sent
//     if (!response.config.headers.hideLoader) {
//         req.done();
//     }
//     return response;
// }, error => {
//      return handleError(error)
// });

export { Http };