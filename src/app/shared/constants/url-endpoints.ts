export abstract class UrlEndpoints {
  //======================================= SHARED  =======================================

  static readonly POST_LOCATION: string = ' ';

  //======================================= Module X =======================================
  // Order
  static readonly GET_TEST: string = 'test';


  static readonly POST_TOKEN_AUTH: string = "api/Auth/Operationlogin"; 
  
  static readonly POST_AllUsersList: string = 'api/Operation/ClietSearch?str=';

  static readonly GET_RejectResponse: string = 'api/Risk/RejectResponse';
  static readonly GET_UserById: string = 'api/Operation/GetUserDocumentsByClientId?MobileNumber=';
  static readonly post_UpdateNationalIdData: string = 'api/Risk/EditNationalIDData';
  static readonly GET_maritalStatus: string = 'api/lookUps/MaritalStatuses';
  static readonly POST_ApproveUser: string = 'api/Risk/Approve';
  static readonly POST_SoftApproveUser: string = 'api/Risk/SoftApprove';
  static readonly Edit_RiskLimit: string = 'api/Risk/EditRiskLimt';
  static readonly POST_EditRiskClientNote: string = 'api/Risk/EditRiskClientNote?userMobile=';
  
   
}
