import React , {Component} from 'react';
import image from './t.jpeg'
import './style.css'


class NewHome extends Component{
  render(){
    return(
      <div>
        <section className='bg-dark' >
          <div className='row container  bg-dark py-4 mx-auto'>
              {
              this.props.items.map((item)=>{
                if(item !== undefined){
                  let title = item.title.toLowerCase();
                  if(title.indexOf(this.props.value) >=0){
                    return(
                      <div className='home-list-container bg-light  col-lg-3 col-md-6 col-12  p-3'>
                        <h4 className='py-2 lead'><b> {item.title}</b></h4>
                        <div className='image-container  mx-auto'>
                          <img src={item.image_url} className='home-list-img w-100'/>

                        </div>
                        <p className='small pb-3 pt-1'> <b>hhhhjjjjjjjjj</b></p>
                        <a href='#' className=' small'>check out </a>
                      </div>
                    )

                  }
                }
              })
            }
          </div>

        </section>
      </div>
    )
  }
}

export default NewHome
