import React from 'react';
import Navbar from './components/navbar/navbar'
import CustomApproach from './components/approach/approach';
import FrameComponent from './components/framing/frame';
import ProductComponent from './components/product/product';
import Works from './components/works/works';
import ChooseUs from './components/chooseUs/chooseUs';
import Client from './components/Clientt/clientt';
import Blog from './components/blog/blog';
import FooterUpper from './components/footerUpper/footerUpper';
import FooterDown from './components/footerDown/footerDown';



import FrameData from './Data/frameData';
import ProductData from './Data/productData';
import ChooseData from './Data/chooseData';
import BlogData from './Data/blogData';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        frameData: FrameData,
        productData: ProductData,
        blogData: BlogData,
        chooseData: ChooseData
    }
  }

  render(){

    const { frameData , productData , chooseData, blogData } = this.state;

    return(
      <div>
        <Navbar />
        <CustomApproach />
        <FrameComponent data={frameData} />
        <ProductComponent data={productData} />
        <Works />
        <ChooseUs data={chooseData} />
        <Client />
        <Blog data={blogData} />
        <FooterUpper />
        <FooterDown data="2020 Frameboss"/>
      </div>
    );
  }
}

export default App;

