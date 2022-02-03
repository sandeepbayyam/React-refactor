import React from 'react';
class Student extends React.Component{
  render(){
    return(
      <li>{this.props.s}</li>
    )
  }
}
export default Student;