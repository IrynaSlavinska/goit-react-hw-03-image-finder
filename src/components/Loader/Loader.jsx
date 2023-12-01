import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const CirclesLoader = () => {
  return (
    <LoaderContainer>
      <Circles
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default CirclesLoader;
