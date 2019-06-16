import React from "react";
import ArticleHeader from "./ArticleHeader";
import { Link } from "gatsby";

const Article = () => {
  const node= {
    slug: "first_article",
    title: "First Article",
    html: "<p class='artcile-exceprt'>what's going to happen now</p>"
  }
  return (
    <div className="c-article c-card u-marginBottomLarge">
      <ArticleHeader node={ node } />
        <img
          style={{ margin: 0 }}
          width='267px'
          height='400px'
          src="/assets/henrique-felix-113545-unsplash.jpg"
        />
      <div className="articl__teaser">
        <section
          dangerouslySetInnerHTML={{__html: node.html}}
          className='content-module' />
        <Link rel="noopener" to={`/article/${node.slug}.html`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default Article;
