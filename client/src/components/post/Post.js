import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
          Non irure commodo eiusmod elit proident voluptate.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Cupidatat sit incididunt duis fugiat velit eiusmod ullamco. Officia
        velit reprehenderit consectetur incididunt ut occaecat. Ut sit tempor
        duis esse sit est fugiat culpa.Cupidatat sit incididunt duis fugiat
        velit eiusmod ullamco. Officia velit reprehenderit consectetur
        incididunt ut occaecat. Ut sit tempor duis esse sit est fugiat
        culpa.Cupidatat sit incididunt duis fugiat velit eiusmod ullamco.
        Officia velit reprehenderit consectetur incididunt ut occaecat. Ut sit
        tempor duis esse sit est fugiat culpa.
      </p>
    </div>
  );
}
