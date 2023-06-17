import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";

const Profile = () => {

  const userId = useLocation().pathname.split("/")[2];

  const { isLoading, error, data } = useQuery(["user"], () =>
  makeRequest.get("/users/find/" + userId).then((res) => {
    return res.data;
  }));


  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/733148/pexels-photo-733148.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/3732652/pexels-photo-3732652.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{""}</span>
            <div className="info">
              <div className="item">
                {/* <PlaceIcon /> */}
                <span>{""}</span>
              </div>
              <div className="item">
                {/* <LanguageIcon /> */}
                <span>{""}</span>
            <button>follow</button>
              </div>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
