import{Injectable} from'@angular/core'
import {SERVICEREQUESTS} from './mock-serviceRequest'
import{serviceRequest} from'./serviceRequest'
@Injectable()
export class ServiceRequestService{
getServiceRequest(){

 return   Promise.resolve(SERVICEREQUESTS);
}

insertServiceRequest(sr:serviceRequest){
Promise.resolve(SERVICEREQUESTS).then((srs:serviceRequest[])=>srs.push(sr));

}

}