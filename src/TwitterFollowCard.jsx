export function TwitterFollowCard({userName, name, isFollowing}){
    return(
        <article className="tw-followcard">  
            <header className="tw-followcard-header">
                <img 
                    className="tw-followcard-avatar"
                    alt="El Avatar de midudev" 
                    src={"https://unavatar.io/midudev"}/>
                <div className="tw-followcard-info">
                    <strong>{name}</strong>
                    <span className="tw-followcard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followcard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}