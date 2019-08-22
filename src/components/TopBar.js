import React from 'react';

function TopBar(props) {
  return (
    <div data-testid="testid" className="topBar">
      {props.text}
    </div>
  );
}

export default TopBar;
