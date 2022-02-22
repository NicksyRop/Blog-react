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
        <h1 className="singlePostTitle">
          Minim culpa enim culpa commodo ipsum
          <div className="singlepostEdit">
            <i className="singlePostIcon  fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>My name</b>
          </span>
          <span className="singlePostDate"> 1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Occaecat nostrud ad occaecat anim reprehenderit. Voluptate elit in
          anim magna. Nostrud officia irure reprehenderit deserunt sint minim
          sint dolore. Laborum occaecat nulla culpa adipisicing dolore. Occaecat
          nostrud ad occaecat anim reprehenderit. Voluptate elit in anim magna.
          Nostrud officia irure reprehenderit deserunt sint minim sint dolore.
          Laborum occaecat nulla culpa adipisicing dolore Occaecat nostrud ad
          occaecat anim reprehenderit. Voluptate elit in anim magna. Nostrud
          officia irure reprehenderit deserunt sint minim sint dolore. Laborum
          occaecat nulla culpa adipisicing doloreOccaecat nostrud ad occaecat
          anim reprehenderit. Voluptate elit in anim magna. Nostrud officia
          irure reprehenderit deserunt sint minim sint dolore. Laborum occaecat
          nulla culpa adipisicing dolore
        </p>
      </div>
    </div>
  );
}
