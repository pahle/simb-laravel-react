import React from "react";

const TitleSection = (props) => {
    return (
        <div className="w-full pb-4">
            <div className="text-center text-5xl font-semibold p-3">
                {props.title}
            </div>
        </div>
    );
}

TitleSection.defaultProps = {
    title: 'Judul'
}

export default TitleSection;