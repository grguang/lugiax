/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import { go, Link, } from '../../../src';

export default class Header extends React.Component<any> {
  constructor(props: any) {
    super(props);
    console.info('init header');
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>gotodo</button>

        <div>
          <Link to="/tomato">番茄钟</Link>
          &nbsp;
          <Link to="/todo">todo</Link>
        </div>
      </div>
    );
  }

  onClick = () => {
    go({ url: '/todo', });
  };
}
