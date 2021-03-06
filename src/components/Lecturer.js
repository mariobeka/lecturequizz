/* eslint-disable max-len */
import React from 'react';
import Display from './parts/Display';
import {Link} from 'react-router-dom';
import Students from './parts/Students';
import JoinForm from './parts/JoinForm';


/**
* @author Marindo Beka
*/
class Lecturer extends React.Component {
  /**
   *
   * @param {props} props The props
   */
  constructor(props) {
    super(props);
  }

  /**
   *
   */
  componentDidMount() {
    // console.log('-----component did mount lecturer--------');
    // console.log(this.props);
    // console.log('-----------------------------------------');
  }
  /**
  * @return {header} The header html.
  */
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.Member.type == 'speaker'} >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Join the session</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>1. Go to the page:</strong> {window.location.origin}</li>
                <li className="list-group-item"><strong>2. Enter the code:</strong> {this.props.Member.code}</li>
              </ul>
              <div className="card-body">
                <Link className='card-link' to="/postQuestion">Post question</Link>
                <Link className='card-link' to="/statistics">Statistics</Link>
              </div>
            </div>
            <Display if={this.props.updateStudents.length>0}>
              <Students updateStudents={this.props.updateStudents} />
            </Display>
          </Display>
          <Display if={!this.props.Member.name }>
            <JoinForm emit = {this.props.emit}/>
          </Display>
        </Display>
        <Display if={this.props.status == 'disconnected'}>
          <h2>Server stopped working. Will back soon...</h2>
        </Display>
      </div>
    );
  }
}

export default Lecturer;
