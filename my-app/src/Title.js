import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        WELCOME: "Benvenuto!"
    },
    en: {
        WELCOME: "Welcome!"
    }
}

export default function Title(){
    const language = useContext(LanguageContext)
    return(
        <h1> { strings[language].WELCOME }</h1 >
)

}