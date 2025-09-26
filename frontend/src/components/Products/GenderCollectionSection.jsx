import { Link } from "react-router-dom"
import mensCollectionImage from "../../assets/mens-collection.webp"
import womensCollectionImage from "../../assets/womens-collection.webp"

const GenderCollectionSection = () => {
  return (
    <section className="py-16 p-4 lg:px0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img src={womensCollectionImage} alt="Womens Collection" className="w-full h-[700px] rounded-lg object-cover" />
          <div className="absolute bottom-8 rounded-lg left-8 bg-white/75 p-4 backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link to={"/"} className="text-gray-900 underline">View collection</Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img src={mensCollectionImage} alt="Mens Collection" className="w-full h-[700px] rounded-lg object-cover" />
          <div className="absolute bottom-8 rounded-lg left-8 bg-white/75 p-4 backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link to={"/"} className="text-gray-900 underline">View collection</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection;
