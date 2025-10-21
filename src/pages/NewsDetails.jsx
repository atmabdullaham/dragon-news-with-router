import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <section className="grid grid-cols-12">
          <section className="col-span-9">
            <h2 className="font-bold mb-5">News Details</h2>
            <NewsDetailsCard></NewsDetailsCard>
          </section>
          <aside className="col-span-3">
            <RighAside></RighAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
