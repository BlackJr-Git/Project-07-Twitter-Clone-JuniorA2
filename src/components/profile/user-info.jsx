
function UserInfo({userName, userTitle}) {
    return (
        <div className="user-info">
            <p className="user-title"> {userTitle} </p>
            <p className="user-name"> {userName} </p>
        </div>
    )
}

export default UserInfo ;