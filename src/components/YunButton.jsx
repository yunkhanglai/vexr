// Yun's Template Button / react component (precomp)
// Use this only for testing features and leaening React

function YunButton(props){
    return (
        // Must have only 1 parent element only. use
        <>
            <div>propertyTest 1: {props.name} </div>
            <div>propertyTest 2: {props.secondproperty} </div>
            <div>propertyTest 3: {props.lalala} </div>
        </>
    );

}
    



export default YunButton;
