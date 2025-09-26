import Hero from "../components/Layout/Hero"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"
import FeatureCollection from "../components/Products/FeatureCollection"
import FeaturedSection from "../components/Products/FeaturedSection"

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{ url: "https://dummyimage.com/600x600/e4e6f5/7c8094.jpg&text=Cant+find+product+image" }],
  },
]

const Home = () => {
  return(
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      
      <h2 className="text-3xl text-center font-bold mb-4">Best seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeatureCollection />
      <FeaturedSection />
    </>
  )
}

export default Home;
