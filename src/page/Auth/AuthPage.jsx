import "./Auth.css";
const AuthPage = () => {
  return (
    <>
      <div className="authpage">
        <div className="container">
          <div className="leftside">
            <h1>Use WhatsApp Clone on your computer</h1>

            <ol class="_1G5cu">
              <li class="_3JRy8">Open WhatsApp on your phone</li>
              <li class="_3JRy8">
                Go to settings by tapping on your profile photo,
                <strong>Menu</strong>, or
                <strong> Settings</strong>
              </li>
              <li class="_3JRy8">
                Tap <strong>Linked devices</strong> and then
                <strong>Link a device</strong>
              </li>
              <li class="_3JRy8">
                <span>
                  Point your phone to this screen to capture the QR code
                </span>
              </li>
            </ol>
          </div>
          <div className="rightside">
            <div className="qrcode">
              <img
                src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
                alt=""
              />
            </div>

            <div className="login">
              <p>or</p>
              <a href="">Login With Google </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthPage;
