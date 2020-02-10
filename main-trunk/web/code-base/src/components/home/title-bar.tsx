import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text, Image } from '../common/elements';
import Images from '../images';
import { COLOR } from '../../constants';

interface IProps {
};

interface IState{ 
};

export default class TitleBar extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  
  componentWillUnmount() {};

  render() { 
    return (
      <header className='center' style={styles.titleBar}>
          <Text className='fl' style={{marginLeft: '10px'}}>Pricing intelligence Portal</Text>
          <Text style={styles.titleText}>{'Hi welcome!!!'}</Text>
      </header>
    );
  }
};

const styles = {
  titleBar: {
    backgroundColor: COLOR.PRIMARY,
    color: COLOR.FONT_COLOR3,
    width: '100%',
    padding: 7
  },
  titleText: {
    flex: 15, 
    fontSize: 15
  }
};