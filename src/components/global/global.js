import stayle from "./global.module.css"


function Global(props) {

    const {global} = props;

    return(
        <div className={stayle.global}>
            
            <h3 className={stayle.global__status}>{global.status}</h3>
            <h3 className={stayle.global__total}>{global.total}</h3>
            
        </div>
    )
}

export default Global;