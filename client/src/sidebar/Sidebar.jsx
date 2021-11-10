import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          alt="my photo"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          excepturi optio obcaecati ipsam, deleniti porro minima harum eos modi
          odio, fugiat dolore nulla repellendus, pariatur quos nobis ea dolorem
          illo.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">ACATEGORIES</span>
        <ui className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
        </ui>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="fab fa-facebook-square sidebarIcon"></i>
          <i className="fab fa-twitter-square sidebarIcon"></i>
          <i className="fab fa-pinterest-square sidebarIcon"></i>
          <i className="fab fa-instagram-square sidebarIcon"></i>
        </div>
      </div>
    </div>
  );
}
