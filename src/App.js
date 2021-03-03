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
                    <audio className={s.audio} src={"http://streaming.tdiradio.com:8000/house.mp3"} controls/>
                    <img className={s.full}
                         src={'https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-24-512.png'}
                         onClick={event => {
                             document.documentElement.requestFullscreen()
                         }}/>

                </header>
                <body className={s.body}>
                <Game/>


                </body>
                <footer className={s.footer}>
                    <a href="https://rs.school/react/" target="_blank">
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