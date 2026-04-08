type Props = {
    unitNumber: number,
    title: string,
    bodyContent: React.ReactNode,
}

function Notes({ unitNumber, title, bodyContent}: Props ){
    return(
        <div className="text-content">
            <h1 className="page-title"><b>Unit {unitNumber}:</b> {title}</h1>
            <hr></hr>
            {bodyContent}
        </div>
    )
}

export default Notes;