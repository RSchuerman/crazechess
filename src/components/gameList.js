import React from 'react'

const style = {
	width: "100px",
	margin: "20px auto",
	padding: '10px',
    fontSize: "16px",
	fontWeight: "200",
	color: '#232f3e' ,
    textAlign: 'center'
};
const styleH2= {
	width: "80vw",
	margin: "40px auto",
	padding: '10px',
	display: "grid",
    fontSize: "18px",
	fontWeight: "800",
	color: '#232f3e' ,
    textAlign: 'center',
    borderTop: '1px solid #232f3e',
    borderBottom: '1px solid #232f3e'
};

const containerStyle = {
    margin: "0px auto 40px",
	display: "grid",    
    width: '100vw'
}

const styleUL= {
	width: "80vw",
	margin: "0px auto",
	padding: '10px',
	display: "grid",
    fontSize: "18px",
	fontWeight: "200",
	color: '#232f3e' ,
};

const gameStyle = {
    borderBottom: "1px solid #232f3e",
    padding: '20px'
}

const GameList = (props) => (

    <div style={containerStyle}>
        <h2 style={styleH2}> 
            JOIN a Game (Available Games: {props.games.length})
        </h2>
        <ul style={styleUL}>
            {props.games.map((game) => <li style={gameStyle} key={game.id}> <b>Hosted by:</b> {game.hostName} <button name={"btn"} style={style} onClick={() => props.onClick(game)}> JOIN</button></li>)}
        </ul>
        
    </div>
)

export default GameList
