
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


function App() {

  function showInfoProduct(product) {
    if (product.status) {
      return (
        <h3>
          ID:{product.id}<br />
        Name:{product.name}<br />
        Bien:{product.bien}<br />
        Status: {product.status ? 'Active' : 'Pending'}
        </h3>
      )
    }
  }




  var product = {
    id: 7,
    name: 'nam dinh',
    bien: 18,
    status: true
  }


  var products = [
    {
      id: 1,
      name: 'Apple Iphone 12 32GB',
      price: 150000000,
      image: 'https://www.did.ie/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-a715fzkubtt_1.jpg',
      status: true
    },
    {
      id: 2,
      name: 'Sam sung',
      price: 200000000,
      image: 'https://cdn.tgdd.vn/Files/2018/05/10/1087515/ro-ri-hinh-anh-chiec-dien-thoai-gap-man-hinh-doc-dao-cua-samsung-3.jpg',
      status: false
    },
    {
      id: 3,
      name: 'Nokia',
      price: 300000000,
      image: 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/05/13/b16-hinh-nen-nokia-1280-cho-samsung-oppo-tren-iphone-anh-nen-nokia-1280-danh-cho-smartphone-dien-thoai-cam-ung.jpg',
      status: true
    }
  ];




  let sp = products.map((pt, index) => {
    let result = '';

    if (pt.status) {
      result = <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
        < Product price={pt.price} image={pt.image} > {pt.name}</Product >
      </div >
    }
    return result;
  });



  return (
    <div>
      <Header />


      <div className="row">
        {sp}

      </div>

      <div className="ml-30">
        {showInfoProduct(product)}
      </div>



    </div>


  );

}

export default App;
