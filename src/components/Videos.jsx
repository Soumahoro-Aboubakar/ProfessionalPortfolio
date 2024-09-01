import video1 from "../assets/video2.mp4";
import video2 from "../assets/video1.mp4";

const Videos = () => {
  return (
    <div className="flex my-12 justify-center" id="skills">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 border   border-orange-700 shadow-sm shadow-orange-400 my-4"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videos;
