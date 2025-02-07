import { axiosInstance5000 } from "@/lib/instance";

export const login = async({
    email,
    password
}: {
    email:string,
    password:string,
}) => {
    const response = await axiosInstance5000.post("/auth/login",{
        email,
        password
    });
    return response.data;
}