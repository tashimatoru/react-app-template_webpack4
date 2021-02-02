import React from 'react';
import {withRouter} from 'react-router';
import Link from 'modules/mui/Link';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        Search
        <hr/>
        <p>
          <Link href="/">index</Link>
        </p>
        <p>
          <Link href="/hoge">hoge</Link>
        </p>
      </React.Fragment>
    );
  }
};

// defaultProps
Search.defaultProps = {
};

export default withRouter(Search);
