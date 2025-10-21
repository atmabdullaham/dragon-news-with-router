import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetailsCard = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
    console.log(newsDetails);
  }, [data, id]);
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="pt-6 px-6">
          <img
            src={news.image_url}
            alt="img"
            className="w-full rounded-xl h-96 overflow-auto overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <div className="card-actions justify-start">
            <Link to={`/category/${news.category_id}`}>
              <button className="btn btn-secondary">Back to category</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
