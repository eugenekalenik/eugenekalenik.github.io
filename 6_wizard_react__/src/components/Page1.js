import React from 'react';


const Page1 = (props) => {
  const { step } = props;

  return (
    <div>
      <h3>{step}. Choose model</h3>
    </div>
  )
}

export default Page1;