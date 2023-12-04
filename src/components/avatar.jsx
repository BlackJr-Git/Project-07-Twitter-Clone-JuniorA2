
function Avatar({source}) {

    // let source = "src\images\profile-photo.png" ;

    return (
        <div className="avatar"> 
            <img src={source} alt="avatar"  />
        </div>
    )
}

export default Avatar;