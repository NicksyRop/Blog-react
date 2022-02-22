import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImage"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>Minim culpa enim culpa commodo ipsum laboris.</h1>
        <div className="singlepostEdit">
          <i className="singlePostIcon  fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
}
