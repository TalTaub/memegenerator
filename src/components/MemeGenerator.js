import React from "react";
import "./ComponentsCss.css";


class MemeGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            topText:"",
            botText:"",
            memeImg:"https://cdn.pixabay.com/photo/2014/05/21/19/14/the-question-mark-350168_960_720.png",
            allMemeImgs: []
        };
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
        .catch(error => console.error(error))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        if (name==="memeImg"){
            const temp= this.state.allMemeImgs[Math.floor(Math.random()*this.state.allMemeImgs.length)].url;
            this.setState({[name]: temp})
        }  else {
        
        this.setState({
            [name]: value
        })
    }
}

    render(){
        return (
            <div className="MemeGenCss">
                <form className="MemeGenCss" onSubmit={this.handleSubmit}>
                    <input
                        name="topText"
                        placeholder="enter top-text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        name="botText"
                        placeholder="enter bottom-text"
                        value={this.state.botText}
                        onChange={this.handleChange}
                    />

                    <br/>
                  

                </form>
                <button
                        onClick={this.handleChange}
                        name="memeImg"
                        value={this.state.memeImg}
                    >    Meme-Away!
                    </button>
                <br/>
                <div className="meme_area"> 
                <h2>{this.state.topText}</h2>

                <img
                    src={this.state.memeImg} height="200px" width="250px"
                />

                <h2>{this.state.botText}</h2>
                </div>
            </div>
        )
    }
} 

export default MemeGenerator;