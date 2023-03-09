const WidgetBox  = ({title, articleSection}) => {
    return(
        <>
        <div className="widget-box position-relative border border-secondary">
                                <div className="widget-title p-2 border border-2 border-secondary rounded-pill " style={{ padding: "4px 25px" }}>
                                    {title}
                                </div>
                            {articleSection}

                            </div>
        </>
    )
}
export default WidgetBox;