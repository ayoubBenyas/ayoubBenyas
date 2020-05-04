import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (<div class="col s12 xl6">
      <div class="blog-container">
        <div class="blog-card" >
          <h3 className="blog-title">{blog.title}</h3>
          <p class="blog-desc">{blog.description}</p>
          <a href={blog.url} target="_blank" class="go-corner">
              <i class="far fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
