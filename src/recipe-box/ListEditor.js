import React, { Component } from 'react';

class ListEditor extends Component {
  state = {
    list: this.props.list.slice(),
  }
  saveState = (list) => {
    this.setState({ list });
    this.props.onChange(list);
  }
  editListItem = (i, e) => {
    var list = this.state.list.slice();
    list.splice(i, 1, e.target.value);
    this.saveState(list);
  }
  addListItem = (e) => {
    var list = this.state.list.slice();
    list.push("");
    this.saveState(list);
  }
  deleteListItem = (e) => {
    var list = this.state.list.slice();
    list.splice(e.currentTarget.dataset.id, 1);
    this.saveState(list);
  }
  renderListItem = (item, index) => {
    return (
      <li key={index} className="list-group-item">
        <div className="input-group">
          <input type="text" className="form-control" value={item} onChange={this.editListItem.bind(null, index)} />
          <span className="input-group-addon" onClick={this.deleteListItem} data-id={index}>
            <span className="glyphicon glyphicon-trash"></span>
          </span>
        </div>
      </li >
    );
  }
  render() {
    return (
      <div className="list-editor">
        <ul className="list-group">
          <li key="title" className="list-group-item active">
            {this.props.title}
            <div className="btn btn-default btn-xs pull-right" onClick={this.addListItem}>
              <span className="glyphicon glyphicon-plus"></span>
            </div>
          </li>
          {this.state.list.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default ListEditor;
