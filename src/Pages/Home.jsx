import Banner from "../components/pages/Home/Banner"
import Faq from "../components/pages/Home/Faq"
import ProductCard from "../components/pages/Home/ProductCard"
import Review from "../components/pages/Home/Review"


const Home = () => {


  return (
    <div>
      <Banner />
     <div className="container mx-auto">
     <div className="my-20">
        <h1 className="text-4xl font-bold text-center pb-9">Proudct card</h1>
      <ProductCard />
      </div>
      <Review />
      <Faq />
     </div>
    </div>
  )
}

export default Home