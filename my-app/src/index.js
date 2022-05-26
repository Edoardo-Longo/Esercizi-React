import HelloWorld from "./Hello";
import ReactDOM from "react-dom";

const HelloWorldElement = <HelloWorld/>
const root = document.querySelector('#root')

ReactDOM.render(HelloWorldElement, root)