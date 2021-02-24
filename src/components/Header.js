import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div >
                <header className="header"> 
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    {/* <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div> */}
                    <div><h2  class="text-success">PLANTS MANAGMENT APP!!!!!!!</h2></div>
                    <br/>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header