import * as React from "react";
import DecoderForm from './components/decoder_form';
import './styles/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          Trussle DeC0d3R
        </h1>
        <DecoderForm />
      </div>
    );
  }
}
