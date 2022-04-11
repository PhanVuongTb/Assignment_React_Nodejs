import { SignupType} from "../types/signup";
import { SigninType } from "../types/signin"
import instance from "./instance";

export const signup = (user: SignupType) => {
    const url = `/signup`;
    return instance.post(url, user)
}
export const signin = (user: SigninType) => {
    const url = `/signin`;
    return instance.post(url, user)
}