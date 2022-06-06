import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';

class QRCodeGen extends Component {
  // Simple usage, defaults for all but the value
  render() {
    return <QRCode value="https://qrtest.loca.lt/test" size={300} />;
  }
}
export default QRCodeGen;
