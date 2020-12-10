
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


function App() {



  function onClick() {
    alert("Nguyen Tuan Anh");
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
      status: true
    },
    {
      id: 3,
      name: 'Nokia',
      price: 300000000,
      image: 'https://imgt.taimienphi.vn/cf/Images/2017/1/ddt/1/7-mau-dien-thoai-chup-anh-dep-ngay-tet.jpg',
      status: true
    }
  ];




  let sp = products.map((pt, index) => {
    let result = '';

    if (pt.status) {
      result =
        < Product price={pt.price} image={pt.image} key={index}> {pt.name}</Product >

    }
    return result;
  });



  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
              {sp}
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >

              <button type="button" class="btn btn-warning" onClick={onClick}>Click me!</button>

            </div>
          </div>
        </div>
      </div>



    </div>


  );

}

export default App;
