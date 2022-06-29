import React from "react";
import { LanguageContext } from "./LanguageContext.js";

const strings = {
    it: {
        WELCOME: "Benvenuto!"
    },
    en: {
        WELCOME: "Welcome!"
    }
}
class Title extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {((language) => {
                    return (
                        <h1>{strings[language].WELCOME}</h1>
                    )
                })}
            </LanguageContext.Consumer>
        )
    }
}

export default Title