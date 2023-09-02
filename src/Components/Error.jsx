import SharedLayout1 from "../Layouts/SharedLayout1";

const Error = () => {
  return (
    <>
      <SharedLayout1 />
      <div className='contacts-page'>
        <div className='contact-head'>
          <h1 style={{ fontSize: "50px" }}>
            404 <br /> {"Page not Found :("}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Error;
