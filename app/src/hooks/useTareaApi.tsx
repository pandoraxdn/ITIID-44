import { useEffect, useState } from "react";
import { pandorApi } from "../api/pandoraApi";
import { TareaResponse } from "../interfaces/tareasInterfaces";

interface UseTareaApi{
    isLoading: boolean;
    listTarea:  TareaResponse;
    loadTarea:  () => void;
}

export const useTareaApi = (): UseTareaApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listTarea, setListTarea ] = useState<TareaResponse>({} as TareaResponse);

    const apiUrl: string = "http://10.172.189.74:3000/api/dsm44/tarea";

    const loadTarea = async () => {
        setIsLoading(true);
        const reponse = await pandorApi.get<TareaResponse>(apiUrl);
        setListTarea(reponse.data);
        setIsLoading(false);
    }

    useEffect(() => {
        loadTarea();
    },[]);

    return { isLoading, listTarea, loadTarea };
}
