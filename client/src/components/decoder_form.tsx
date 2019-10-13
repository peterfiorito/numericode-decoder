import * as React from "react";
import Axios from 'axios';
import '../styles/decoder.scss';

interface DecoderState{
  messageToDecode: string;
  decodedMessage: string;
  invalidInput: any;
}

export default class DecoderForm extends React.Component <{}, DecoderState> {
  constructor(props:any) {
    super(props);
    this.state = {
      messageToDecode: '',
      decodedMessage: '',
      invalidInput: {
        valid: true,
        message: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMessageToDecode = this.setMessageToDecode.bind(this);
  }

  componentDidMount(){
    if(localStorage){
      const numericode = localStorage.getItem('numericode');
      this.setState({ messageToDecode:  numericode })
    }
  }

  handleSubmit(event:any){
    event.preventDefault();
    const data = {
      message: this.state.messageToDecode
    }
    Axios.post('http://localhost:8081/message', data)
      .then((response) => {
        if(localStorage){
          localStorage.setItem('numericode', data.message);
        }
        this.setState({ decodedMessage: response.data })
      })
      .catch(err => { throw new Error(err) });
  }

  setMessageToDecode(event: React.ChangeEvent<HTMLInputElement>){
    const isvalid = /^(\s*[0-9]+\s*)+$/.test(event.target.value);
    if(!isvalid && event.target.value){
      return this.setState({invalidInput: { valid: false, message: 'Only accepts numbers and spaces' }});
    }
    return this.setState({ messageToDecode: event.target.value, invalidInput: { valid: true, message: '' } });
  }

  render() {
    return (
      <div className="decoder">
        <div className="decoder__form--wrapper">
          <form onSubmit={this.handleSubmit} className="decoder__form">
            <p>Message to decode</p>
            <input onChange={this.setMessageToDecode} value={this.state.messageToDecode || ''}
              className={`decoder__form-input ${!this.state.invalidInput.valid ? 'decoder__form-input--invalid' : ''}`}
              aria-label="code-input">
            </input>
            <p className="decoder__form-input-warning">{this.state.invalidInput.message}</p>
            <button className="button--primary" aria-label="submit">
              <span>Decode</span>
            </button>
          </form>
        </div>
        <div className="decoder__decoded-message">
          {this.state.decodedMessage && (<p>{this.state.decodedMessage}</p>)}
        </div>
      </div>
    );
  }
}