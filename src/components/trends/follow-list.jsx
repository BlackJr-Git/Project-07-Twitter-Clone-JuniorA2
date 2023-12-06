import AccountFollow from "./account-follow";

function FollowList() {
    return (
        <div className="follow-list">
            <AccountFollow userName={"@nytimes"}/>
            <AccountFollow userName={"@cnn"} />
            <AccountFollow userName={"@twitter"}/>
        </div>
    )
}

export default FollowList ; 