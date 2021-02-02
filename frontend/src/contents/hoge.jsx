import React from 'react';
import {withRouter} from 'react-router';
import Link from 'modules/mui/Link';

class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        Hoge
        <hr/>
        <p>
          <Link href="/">index</Link>
        </p>
        <p>
          <Link href="/search?hoge=fuga">search</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Hoge.defaultProps = {
};

export default withRouter(Hoge);
