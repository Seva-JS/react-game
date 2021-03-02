import React from "react";
import Board from "./board";


export default class Game extends React.Component {


    state = {
        history: [
            {
                squares: Array(9).fill(null)
            }
        ],
        stepNumber: 0,
        xIsNext: true,
        isAscending: true
    };

    handleClick(e) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const locations = [
            [1, 1],
            [2, 1],
            [3, 1],
            [1, 2],
            [2, 2],
            [3, 2],
            [1, 3],
            [2, 3],
            [3, 3]
        ];
        squares[e] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{squares: squares, location: locations[e]}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    handleToggle() {
        this.setState({
            isAscending: !this.state.isAscending
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
            </div>
        );
    }
}

