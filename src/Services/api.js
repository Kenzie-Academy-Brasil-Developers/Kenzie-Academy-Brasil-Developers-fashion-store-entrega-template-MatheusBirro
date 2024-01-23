import axios from "axios"

export const FashionStoreApi = axios.create({
    baseURL: "https://fashion-store-api.onrender.com",
    // baseURL: "localhost:3001",
    timeout: 8000,
})