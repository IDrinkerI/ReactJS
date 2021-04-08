import { CHANGE_NAME } from "./types";

const initialStore = {
    name: "Some Name",
}

export const profileReducer = (store = initialStore, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...store,
                name: action.payload,
            }

        default:
            return store;
    }
}