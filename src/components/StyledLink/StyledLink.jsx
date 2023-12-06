import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

 :hover {
    color: orangered;
  }
`;

StyledLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};