function Jobs({ url, by, time, title }) {
    const formattedTime = new Date(time * 1000).toLocaleDateString();
  
    return (
      <div className="custom-post" role="listitem">
        <h2 className="custom-post__title">
          <a
            className={url ? "" : "inactiveLink"}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </h2>
        <span className="custom-post__metadata">
          by {by} posted on {formattedTime}
        </span>
      </div>
    );
  }
  
  export default Jobs;