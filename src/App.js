import React from "react";
import s from './App.module.css'
import Game from "./main/game";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    render() {
        return (
            <div className={s.app}>
                <header className={s.head}>
                    <h1>TIC-TAC-TOE</h1>

                </header>
                <body className={s.body}>
                <Game/>
                </body>
                <footer className={s.footer}>
                    <a href="https://rs.school/js/" target="_blank">
                        <img src="https://rs.school/images/rs_school_js.svg" className={s.img}/>
                    </a>
                    <a href="https://github.com/Seva-JS" target="_blank">
                        <img
                            src="https://avatars.githubusercontent.com/u/75321123?s=400&u=881fdb561c23c94b07dd94bf710e55e24fecc7ee&v=4"
                            className={s.img}/>
                    </a>
                </footer>
            </div>
        )
    }
}