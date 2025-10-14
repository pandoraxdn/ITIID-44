import { useReducer, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { RequestLogin } from "../interfaces/userInterfaces";
import { pandorApi } from "../api/pandoraApi";

export interface LoginData{
    email: string;
    password: string;
}

export interface UseLoginUser {
    isLoading:          boolean;
    state:              LoginData;
    handleLogin:        () => void;
    handleInputChange:  ( fieldName: keyof LoginData, value: string ) => void;
    request:            RequestLogin;
}

export const useLoginUser = (): UseLoginUser => {

    const initialState: LoginData = {
        email: "",
        password: ""
    }

    type Action = { type: "handleInputChange", payload: { fieldName: keyof LoginData, value: string }; }

    const dataReducer = (state: LoginData, action: Action) => {
        switch( action.type ){
            case "handleInputChange": {
                return{
                    ...state,
                    [ action.payload.fieldName ] : action.payload.value
                }
            }
        }
    }

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ state, dispatch ] = useReducer( dataReducer, initialState );

    const [ request, setRequest ] = useState<RequestLogin>({} as RequestLogin);

    const { signIn, changeFavoriteImage, changeUsername, changeEmail } = useContext( AuthContext );

    const apiURl: string = "http://192.168.1.101:3000/api/dsm44/usuarios/login";

    const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
        dispatch({ type: "handleInputChange", payload: { fieldName, value } });
    }

    const handleLogin = async () => {
        setIsLoading(true);
        const dataBody = {
            email: state.email,
            password: state.password
        } 
        try{
            const response = await pandorApi.post<RequestLogin>(apiURl, dataBody);
            ( response.data !== false ) && ( () => {
                signIn();
                changeUsername( response.data.username );
                changeEmail( response.data.email );
                changeFavoriteImage( response.data.image );
            })();
        }catch(error){
            console.log( error );
            setRequest(false);
        }
        setIsLoading(false);
    }

    return { isLoading, state, handleLogin, handleInputChange, request };

}
