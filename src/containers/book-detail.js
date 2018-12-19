import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component
{
render(){

if (!this.props.book )
{
return <div>select a book to get started. </div>;

}

  return(
    <div>
    <h3>details for </h3>
    <div>title: {this.props.book.title}</div>
    </div>

  );
}


}

function mapStateTopProps(state)
{
return {
book : state.ActiveBook
};

}

export default connect(mapStateTopProps)(BookDetail);
