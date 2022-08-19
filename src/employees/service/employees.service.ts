import { Http } from "@/services/http-client";
// import { LossCodeBookConstants } from "@/loss-code-book/constants";
// import {
//   AddUpdateLossCodeBookAdapter,
//   CodesAdapter,
//   ComponentsAdapter,
//   EditLossCodeBookAdapter,
//   LossCodeBookAdapter
// } from "../adapter/loss-code-book.adapter";
// import { AddUpdateLossCodeBook,Params } from "../model/loss-code-book.model";
class Employee {
  /**
   * @description This method is used to delete loss code book record
   * @param id Loss code Book record id
   */
   deleteEmployee(id: string): Promise<any> {
    return Http.delete(`${id}`);
  }
  /**
   * Gets all Loss code book
   * @param params : pagination parameters
   * @param hideLoader : boolean value to show or hide loader
   */
   getAllEmployees() {
    return Http.get(`employees`).then((response:any) => {
      return response.data;
    //   return EmployeeAdapter.toResponse(response.data.result);
    });
  }
}

export const EmployeesService = new Employee();
