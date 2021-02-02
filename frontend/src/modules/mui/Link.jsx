import React from 'react';
import {withRouter} from 'react-router';
import MuiLink from '@material-ui/core/Link';
import transition from 'utils/transition';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MuiLink
        href={this.props.href}
        style={this.props.style}
        onClick={(event) => {
          // callback
          this.props.onClick(event);

          if (
            event.ctrlKey
            || event.altKey
            || event.shiftKey
            || this.props.href.match(/^\w+:\/\//)
          )
          {
            return;
          }

          // 通常のクリックであれば、遷移イベントをキャンセル
          event.preventDefault();

          // disabled判定
          if (this.props.disabled) {
            return;
          }

          // 遷移
          transition(this.props, this.props.href);
        }}
        color={this.props.color}
        underline={this.props.underline}
      >
        {this.props?.children}
      </MuiLink>
    );
  }
};

// defaultProps
Link.defaultProps = {
  // 遷移先
  href:      "/",
  // クリックイベント
  onClick:   () => {},
  // テキストカラー
  color:     "inherit",
  // 下線
  underline: "none", // none, hover, always
  // 画面遷移無効
  disabled:  false,
  // style
  style:     {},
};

export default withRouter(Link);
