import { axiosInstance5000 } from "@/lib/instance";

export const signup = async({
    name,
    email,
    password,
}:{
    name:string;
    email:string;
    password:string;
}) => {
    const response = await axiosInstance5000.post("/auth/signup/",{
        name,
        email,
        password
    })

    return response.data;
}