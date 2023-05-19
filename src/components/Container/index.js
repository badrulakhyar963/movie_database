import stayle from "./index.module.css"

function Container(props) {
    return<div className={stayle.container}>
        {props.children}
    </div>
}
export default Container;