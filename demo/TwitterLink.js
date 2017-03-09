import React, { PropTypes } from 'react';

const TwitterLink = (props) => {
  const { href = '' } = props;
  const parts = href.match(/twitter\.com\/(.*)\/?/);
  if (parts) {
    const name = parts[1];
    return (
      <span>
        <img src={`https://twitter.com/${name}/profile_image?size=mini`} />
        <a href={href}>{name}</a>
      </span>
    );
  } else {
    return <a {...props} />;
  }
};

TwitterLink.displayName = 'TwitterLink';

TwitterLink.propTypes = {
  href: PropTypes.string,
};

export default TwitterLink;
