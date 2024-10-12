import { atom } from "recoil";

interface flightSearchType{
    source : string 
    destination : string
    departureDate : Date
    returnDate : Date | undefined
    srcCode : string
    destCode  : string
}

export const flightSearchAtom = atom<flightSearchType>({
    key : 'flightSearchAtom',
    default : {
        source : '',
        destination : '',
        departureDate : new Date(), 
        returnDate : undefined,
        srcCode : '',
        destCode: ''
    }
})
export const flightResultLoading = atom({
    key : 'flightResultLoading' , 
    default : false
})