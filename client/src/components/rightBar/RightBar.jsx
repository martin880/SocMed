import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4557831/pexels-photo-4557831.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Ruby</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5150428/pexels-photo-5150428.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Balle</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5257425/pexels-photo-5257425.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Ellia</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4063856/pexels-photo-4063856.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Fanny</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6759243/pexels-photo-6759243.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Jessica</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Erie</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5256143/pexels-photo-5256143.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Jenny</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5915140/pexels-photo-5915140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Nartha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
