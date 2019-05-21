import React from 'react'
import Slider from '../components/Slider.js'
import Reactdom from 'react-dom';
import axios from "axios";
import Cell from '../components/Cell'


class Home extends React.Component{
    state={
        cells:[]
    }
    render(){
        return(
            <div className="home">
                 <div className="swiper-container" style={{
                     swiperContainer:{
                        display:'block',
                        width:'600',
                        height:'300',
                        marginTop:'50'
                 } }}>
                     <Slider/>


                    {/*<div className="swiper-wrapper" style={{img:{height:'2rem',widths:'4rem'}}}>*/}

                        {/*<div className="swiper-slide" style={{background:'#000'}}>*/}
                            {/*<img src={require('../assets/img/img1.jpg')} />*/}
                        {/*</div>*/}

                        {/*<div className="swiper-slide">*/}
                            {/*<img src={require('../assets/img/img2.jpg')} />*/}
                        {/*</div>*/}

                        {/*<div className="swiper-slide">*/}
                            {/*<img src={require('../assets/img/img3.jpg')} />*/}
                        {/*</div>*/}
                    {/*</div>*/}


                 </div>
                <Cell cells={this.state.cells} dataName="home"/>
            </div>
        )
    }
    async componentDidMount() {
        let res=await axios({url:"http://localhost:3333/mock/home",parmars:{_limit:7}});
        this.setState({cells:res.data.page_data})
    }
}

export default Home;