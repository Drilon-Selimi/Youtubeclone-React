import React from 'react';
import {Paper, TextField} from '@material-ui/core';





 class SearchBar extends React.Component {
     state = {
        searchTerm:'',

     }
      handelChange = (event) => this.setState({searchTerm: event.target.value });

      handelSubmit = (event) => {
       const {searchTerm} = this.state;
       const {onFormSubmit} = this.props;

       onFormSubmit(searchTerm);

       event.preventDefault();

      }

      

    render() {
        return (
            
           <Paper elevation={10} style={{padding:'25px'}}>
              
            <form onSubmit={this.handelSubmit}>
                <TextField fullWidth label="Search..." onChange={this.handelChange} />
            </form>

           </Paper>
            
        )
    }
}

export default SearchBar;
