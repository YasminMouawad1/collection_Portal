import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _API: APIService) { }
 
  
  getAllUsersList(name:string){
    return this._API.doPost(UrlEndpoints.POST_AllUsersList+name,name)
  }

  getRejectResponse(){
    return this._API.doGet(UrlEndpoints.GET_RejectResponse)
  }

  getUserById(id: string){
    return this._API.doGet(UrlEndpoints.GET_UserById + id)
  }

  getmaritalStatus(){
    return this._API.doGet(UrlEndpoints.GET_maritalStatus)
  }

  postUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_ApproveUser, userApprove)
  }

  EditUserNationalIdData(userData:any){
    return this._API.doPost(UrlEndpoints.post_UpdateNationalIdData, userData)
    
  }
  softApproveUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_SoftApproveUser, userApprove)
  }
  editRiskLimit(userApprove: any){
    return this._API.doPost(UrlEndpoints.Edit_RiskLimit, userApprove)
  }
  
  EditRiskClientNote(userData:any){
    return this._API.doPost(UrlEndpoints.POST_EditRiskClientNote+userData.userMobile+'&note='+userData.note,userData)
  }

}
