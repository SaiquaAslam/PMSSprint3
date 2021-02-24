import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

    go() {
        console.log(' Yippeee '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <br/>
                <div  class="head" style={{left:"25%", fontSize:"80px", color:"green", textShadow:"2px 2px black"}}> <h1 class="text-success"><center>  WELCOME TO PLANTS MANAGEMENT SYSTEM!!!!!!  </center></h1></div>
                <img src = "https://www.proflowers.com/blog/wp-content/uploads/2018/06/how-to-revive-a-plant-hero.jpg" alt = "Sun Glasses"/>
                {/* <a href="/searchByName"><button>Cilck</button></a> */}
                <br/>
            </div >
        )
    }
}


export default withRouter(Home)
