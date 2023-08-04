//IMPORTS
import React,{Component} from 'react';
import { Anchor } from 'antd';

// CSS Fonts Import
<style>
import url('https://fonts.googleapis.com/css2?
family=Lilita+One&
family=Teko:wght@600&
display=swap');
</style>

///////////////////////////////////////////////////////////////////////////////

////////////////////////
/* Main Contest Class */
////////////////////////

class Contest extends Component {
    // Preview contests???
    // Showcase contests that are closing soon (no more entries)?
    // Showcase contests that have voting closing soon (no more votes on entries)??
    constructor(props) {
        super(props)

        this.state = {
            contests: [],
            id: 0
        }
    }

    // render
    render() {
        <div>
            <h1> Fitz Contests</h1>
            <div> Vote on your fave styles! </div>
            <div> Enter your own looks! </div>
            <div> Create your own contest! </div>
        </div>
    }

}

export default Contest;
