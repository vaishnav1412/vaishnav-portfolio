import {
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import "./blog.scss";

const Blog = ({ blogPosts }) => {
  return (
    <section className="blog-section">
      <div className="section-header">
        <span className="section-subtitle">Latest articles</span>
        <h2 className="section-title">From My Blog</h2>
        <div className="title-underline" />
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <a href={post.url} key={index} className="blog-card">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>
                  <FiCalendar /> {post.date}
                </span>
                <span>
                  <FiClock /> {post.readTime}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;