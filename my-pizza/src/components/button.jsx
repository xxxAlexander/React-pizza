import React from 'react'
import '../styles/app.css'
export const Button = ({
    outline,
    isBlack,
    text
}) => {
    return (
        <div className={isBlack ? "button-main" : "button-black"}>
            <div className="button-space">
                <div className="button-left-side">
                    520Руб.
                </div>
                <div className="button-right-side">
                    3
                </div>
            </div>
            
        </div>
    )
}

