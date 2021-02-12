import React from 'react';
import {withRouter} from 'react-router';
import Link from 'modules/mui/Link';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        Index(main)
        <hr/>
        <p>
          <Link href="/hoge">hoge</Link>
        </p>
        <p>
          <Link href="/search?hoge=fuga">search</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Index.defaultProps = {
};

export default withRouter(Index);
