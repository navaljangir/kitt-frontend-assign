'use client'

import { ChangeEvent } from "react"

// import { FormEvent } from "react"

interface inputBoxType{
    placeholder? : string 
    className : string
    onFocus? : ()=> void 
    onBlur? : (e : ChangeEvent<HTMLInputElement>)=>void
    onChange? : (e : ChangeEvent<HTMLInputElement>)=> void
    value? : string
}
export function InputBox({placeholder , className , onFocus , onBlur , onChange , value} : inputBoxType){
    return (
    <input placeholder={placeholder} className={className} onFocus={onFocus} onBlur={(e)=> onBlur?.(e)} onChange={(e)=> onChange?.(e)} value={value}/>
    )
}