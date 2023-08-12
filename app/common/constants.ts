import { Option } from "./types"

export const regex={
    email: /^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i,  ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    onlyAlphabets:/^[a-zA-Z ]*$/i,
    number:/^^[0-9]*$/i,
}

export const commanMessage={
    GenericErr: `Oops! It appears our application stumbled upon an unexpected challenge. Our team is on the case. We truly appreciate your understanding!`,
    InvalidOTP:`Invalid OTP. Please re-enter the OTP or change the email.`,
    InvalidEmail:`Invalid email address.`,
    EmailReq:`Email is required.`,
    Len_100:`Maximum 100 characters allowed.`,
    EnterOTP:`Please enter OTP.`,
}

export const relations:Option[]=[
    { id: 'Self', name: 'Self' },
    { id: 'Spouse', name: 'Spouse' },
    { id: 'Children', name: 'Children' }
]
export const genders:Option[]=[
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' }
]