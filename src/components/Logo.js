import React, { Component } from 'react'
import { border } from '@material-ui/system';

export default class Logo extends Component {

    state ={ 
                Imag:["http://pngimg.com/uploads/youtube/youtube_PNG13.png"]
        
    };

    
    render() {
        return (
            <div>
            <img
            style={{width:120,
            height:90}}
            src={this.state.Imag[0]} />
            </div>
        );
    }
}
