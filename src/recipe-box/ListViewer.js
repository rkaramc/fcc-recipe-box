import React, { Component } from 'react';

class ListViewer extends Component {
  renderListItem = (item, index) => {
    return (
      <li key={index} className="list-group-item">
        <span>{item}</span>
      </li >
    );
  }
  render() {
    return (
      <ul className="list-group">
        <li key="title" className="list-group-item active">
          {this.props.title}
        </li>
        {this.props.list.map(this.renderListItem)}
      </ul>
    );
  }
}

export default ListViewer;
