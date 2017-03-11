import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  min-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: .5rem;
  background-color: #fff;
`;

export const Box = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const Pre = styled.pre`
  white-space: word-wrap;
  margin: 0;
  font-size: .8rem;
  line-height: 1.3rem;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: .3rem;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .2rem;
  font-size: 0.8rem;
  color: #444;
  padding: .5rem 0;
`;

export const Title = styled(Info)`
  font-size: 1.5rem;
  font-weight: normal;
  padding-bottom: 1rem;
  text-align: center;
`;

export const Header = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: normal;
  letter-spacing: .3rem;
`;