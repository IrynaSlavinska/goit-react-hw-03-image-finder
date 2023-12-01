import { MoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <MoreButton type="button" onClick={onClick}>
      Load more
    </MoreButton>
  );
};

export default Button;
