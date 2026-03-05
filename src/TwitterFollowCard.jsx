export function TwitterFollowCard(){
    return(
        <article className="tw-followcard">  
            <header className="tw-followcard-header">
                <img 
                    className="tw-followcard-avatar"
                    alt="El Avatar de midude" src="https://unavatar.io/midudev"/>
                <div className="tw-followcard-info">
                    <strong>Miguel Angel</strong>
                    <span className="tw-followcard-infoUserName">@midudev</span>
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