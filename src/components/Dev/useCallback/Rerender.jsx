import React from "react";

export default class Rerender extends React.Component {
    render() {
        console.log('RERENDER: render')
        return (
            <>
                <div>Ops</div>
            </>
        )
    }
}