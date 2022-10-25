import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Dna
        visible={true}
        height="400"
        width="400"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
