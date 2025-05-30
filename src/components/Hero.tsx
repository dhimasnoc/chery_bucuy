import heroVideo from "../assets/herovideo.mp4";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-black overflow-hidden relative">
      <div className="relative w-full h-full overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-auto min-w-full min-h-full top-[-10%] left-1/2 transform -translate-x-1/2"
          // top -20% geser video ke atas, sesuaikan angkanya
        />
      </div>
    </section>
  );
};

export default Hero;
