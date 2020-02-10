import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Home from '../components/home';

interface IProps {
  history: any
};

interface IState{
};

export default class AppContainer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
    }
  };

  componentWillUnmount() {};
  
  render() {
    return(
          <HashRouter>
            <Home history={this.props.history} />
          </HashRouter>
    )
  }
};