import { API_URL } from "react-native-dotenv";

export const API = API_URL;

export const SCHOOL_MEALS = {
    weekday: {
        lunchStart: '11:30a',
        lunchEnd: '14:30p',
        dinnerStart: '17:00p',
        dinnerEnd: '19:00p',
    },
    weekend: {
        lunchStart: '12:00a',
        lunchEnd: '13:45a',
        dinnerStart: '17:30p',
        dinnerEnd: '19:30p',
    }
}