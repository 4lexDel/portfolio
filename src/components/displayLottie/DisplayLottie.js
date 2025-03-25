import React, {Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData, loop = true, speed = 1 }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} loop={loop} speed={speed} />
    </Suspense>
  );
};

export default DisplayLottie;
