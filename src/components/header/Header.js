import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1590931512276-3bc8a94e6432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50cyUyMG91ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  );
}
