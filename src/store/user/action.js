import { types } from "./types";

export const setUser = (payload) => ({
    type: types.SET_USER,
    payload
})

export const register = (payload) => ({
    type: types.REGISTER,
    payload
})