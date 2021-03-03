import React from "react";


import Square from "./sq";

export default class Board extends React.Component {
    renderSquare(e) {
        return (
            <Square
                isWinning={this.props.winningSquares.includes(e)}
                value={this.props.squares[e]}
                onClick={() => this.props.onClick(e)}
            />
        );
    }

    render() {
        let squares = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(i * 3 + j));
            }
            squares.push(
                <div key={i}>
                    {row}
                </div>
            );
        }
        return <div> {squares} </div>;
    }
}

