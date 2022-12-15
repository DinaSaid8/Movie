import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <div className="m-auto">
        <div className="d-flex justify-content-between py-4 ">
          <Skeleton
            className=" bg-black mb-4"
            square
            width={230}
            height={280}
            count={2}
          />
          <Skeleton
            className=" loading bg-black mb-4"
            square
            width={230}
            height={280}
            count={2}
          />
          <Skeleton
            className="loading bg-black mb-4"
            square
            width={230}
            height={280}
            count={2}
          />
          <Skeleton
            className=" loading bg-black mb-4"
            square
            width={230}
            height={280}
            count={2}
          />
        </div>
      </div>
    </>
  );
};
export default Loading;
