import './topbar.css';

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook-square topIcon"></i>
        <i className="fab fa-twitter-square topIcon"></i>
        <i className="fab fa-pinterest-square topIcon"></i>
        <i className="fab fa-instagram-square topIcon"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
          </ul>
      </div>
      <div className="topRight">

      <img className="topImg" src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg" alt="profile" />
      <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
}
