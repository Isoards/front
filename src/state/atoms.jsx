
import { atom } from 'recoil';

export const patientEmbedingRequestData = atom({
  key:"careReservationRequestState",
  default:{
    diseaseName:"", 
    reservationReason:""
  }
})

export const careReservationRequest = atom({
  key: "careReservationRequestState",
  default:{
    patientName:"",
    patientBirthDate:"",
    patientHeight:"",
    patientWeight:"",
    patientGender:"",

    diseaseName: "",
    reservationLocation:"",
    startDate:"",
    endDate:"",
    dailyStartTime:"",
    dailyEndTime:"",

    reservationReason:"",
    UnAcceptedBehavior:"",
    RecentDiseaseData:"",

    userId:""
  }
})

export const userState = atom({
  key: 'userState',
  default: null,
});

export const caregiverState = atom({
  key: 'caregiverState',
  default: null,
});

export const caregiverSignUpState = atom({
  key: 'caregiverSignUpState',
  default: {
    "email": "",
    "password":"",
    "phone": "",
    "name": "",
    "birthDate": "",
    "gender": "",
    "certification": "",
    "workHistory": [],
    "careerDescription":"",
    "foreigner": ""

  },
});