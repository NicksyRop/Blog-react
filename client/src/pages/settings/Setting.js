import SideBar from "../../components/sidebar/SideBar";
import "./setting.css";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle"> Update Your Account</span>
          <span className="settingDeleteTitle"> Delete Account</span>
        </div>

        <form className="settingForm">
          <label>Profile picture</label>
          <div className="settingPP">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <label htmlFor="fileinput">
              <i className="settingPPIcon fa-solid fa-circle-user"></i>
            </label>
          </div>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="Nicksy" />

          <label>Email</label>
          <input type="email" placeholder="nicksy@gnail.com" />

          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
