export default function loading() {
  return (
    <>
      <div className="absolute z-50 h-[100vh] w-[100vw] bg-secondary grid place-content-center ">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </>
  );
}
