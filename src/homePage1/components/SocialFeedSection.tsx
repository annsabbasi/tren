import React from "react";
import heartround from '../../assets/homePage1/heart-rounded.svg';

type SocialFeedVariant = "story" | "media";

type SocialFeedItem = {
  id: number;
  variant: SocialFeedVariant;
  author: string;
  time: string;
  title: string;
  description?: string;
  linkLabel: string;
  tags?: string[];
  imageUrl?: string;
};

const socialFeedItems: SocialFeedItem[] = [
  {
    id: 1,
    variant: "story",
    author: "Tech Ten",
    time: "3h ago",
    title: "Understanding market volatility is key to making informed decisions in trading.",
    description:
      "We break down the signals that help separate noise from opportunity in fast-moving markets.",
    linkLabel: "Read more",
    tags: ["Market watch", "Trading desk"],
  },
  {
    id: 2,
    variant: "story",
    author: "Tech Ten",
    time: "3h ago",
    title: "The rise of decentralized finance continues to reshape the financial landscape.",
    description:
      "See the models we use to evaluate liquidity, risk, and long-term adoption across DeFi ecosystems.",
    linkLabel: "Read more",
    tags: ["DeFi", "Research"],
  },
  {
    id: 3,
    variant: "story",
    author: "Tech Ten",
    time: "3h ago",
    title: "Long-term & short-term investing: which strategy suits your goals?",
    description:
      "We compare portfolio allocations side-by-side to show how investors can stay agile without losing the big picture.",
    linkLabel: "Read more",
    tags: ["Strategy", "Portfolio"],
  },
  {
    id: 4,
    variant: "media",
    author: "Tech Ten",
    time: "Just now",
    title: "Analysts spotlight significant shifts in the market over the next quarter.",
    linkLabel: "See insights",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    variant: "media",
    author: "Tech Ten",
    time: "Live",
    title: "Developers are shipping faster with real-time commentary from the desk.",
    linkLabel: "View thread",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
  },
];

const SocialFeedSection: React.FC = () => {
  return (
    <section className="social-feed-section">
      <div className="container">
        <header className="intro max-w-1200 mx-auto text-center mb-16">
          <span className="eyebrow text-gray-400 flex items-center">
            <span className="icon" aria-hidden="true">
              <img src={heartround} alt="heartround" className="size-5 mr-2 mb-1 text-gray-400" />
            </span>
            Social feeds and threads
          </span>
          <h2>Join 10,000+ investors <br />sharing insights in real time.</h2>
        </header>

        <div className="grid">
          {socialFeedItems.map((item) => (
            <article
              key={item.id}
              className={`card ${item.variant === "media" ? "card--media" : "card--story"}`}
            >
              {item.variant === "media" && item.imageUrl ? (
                <>
                  <div className="card-media" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                  <div className="card-overlay" />
                  <div className="card-content">
                    <div className="card-meta">
                      <span className="avatar" aria-hidden="true">
                        TT
                      </span>
                      <div className="meta-text">
                        <span className="author">{item.author}</span>
                        <span className="time">{item.time}</span>
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <a href="#" className="card-link">
                      {item.linkLabel}
                    </a>
                  </div>
                </>
              ) : (
                <div className="card-inner">
                  <header className="card-header">
                    <span className="avatar" aria-hidden="true">
                      TT
                    </span>
                    <div className="meta-text">
                      <span className="author">{item.author}</span>
                      <span className="time">{item.time}</span>
                    </div>
                  </header>
                  <h3>{item.title}</h3>
                  {item.description && <p className="description">{item.description}</p>}
                  {item.tags && (
                    <ul className="tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <a href="#" className="card-link">
                    {item.linkLabel}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;

