import axios from "axios"

export const FashionStoreApi = axios.create({
    baseURL: "https://fashion-store-api.onrender.com",
    timeout: 8000,
})