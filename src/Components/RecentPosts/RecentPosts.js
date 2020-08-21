import React from "react";

import PostCard from "../BlogPostCard/BlogPostCard";

function RecentPosts(props) {
  return (
    <section className="RecentBlogPosts">
      <h2>Novidades da Indie</h2>
      <div className="PostList">
        {props.posts.map((post, index) =>
          post ? (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              thumbnail={props.thumbnail}
              date={props.date}
            />
          ) : null
        )}
      </div>
    </section>
  );
}

export default RecentPosts;
