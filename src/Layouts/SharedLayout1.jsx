import { TwcLogo } from "../assets/logo.jsx";

const SharedLayout1 = () => {
  return (
    <>
      <div id='twc-logo'>
        <TwcLogo />
        <section>
          <p>
            <span>contacts </span> <br />
            portal
          </p>
        </section>
      </div>
      <div className='circular-segment'></div>
    </>
  );
};
export default SharedLayout1;
