import { useState } from "react";
import { requestAge } from "../http/agify";
import { requestGender } from "../http/genderize";

type HookResponseModel = {
    predictPersonalInfo: (name: string) => void;
    age: number | undefined;
    gender: string | undefined;
    isLoading: boolean;
};

export const useNameCalculation = (): HookResponseModel => {
    const [loading, setLoading] = useState(false);
    const [age, setAge] = useState<number | undefined>();
    const [gender, setGender] = useState<string | undefined>();

    const predictPersonalInfo = async (name: string) => {
        //TODO:
    }

    return {
        predictPersonalInfo,
        age,
        gender,
        isLoading: loading
    }
}