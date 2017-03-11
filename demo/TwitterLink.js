import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: inline-flex;
  padding: 0.2rem;
  background-color: #03A9F4;
  border-radius: .5rem;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: #2196F3;
  }
`;

const Img = styled.img`
  border-radius: .4rem;
  border: 2px solid #fff;
  width: 1.6rem;
`;

const Username = styled.span`
  margin: 0 .5rem;
  color: #fff;
`;

const TwitterLink = (props) => {
  const { href = '' } = props;
  const parts = href.match(/twitter\.com\/(.*)\/?/);
  if (parts) {
    const name = parts[1];
    return (
      <Container href={href}>
        <Img src={`https://twitter.com/${name}/profile_image?size=mini`} />
        <Username >{name}</Username>
      </Container>
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
