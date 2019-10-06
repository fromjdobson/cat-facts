import React from 'react';

class FavImages extends React.Component {
    constructor(){
      super()
      this.state = {
          saved: JSON.parse(localStorage.getItem('cats')) || []
      }
    }

    deleteFav = (index) => {
      const updatedimgs = this.state.saved.filter((img,i) => index !== i )
      localStorage.setItem("cats", JSON.stringify(updatedimgs))
      this.setState({saved: updatedimgs})
    }

    // deleteFav = (i) => {
    //   let savedFavs = this.state.saved
    //   localStorage.setItem("cats", JSON.stringify(savedFavs))
    //   const removeFav = (catImg,index)=>i!==index
    //   savedFavs = savedFavs.filter(removeFav)
    //   this.setState({saved: savedFavs})
    // }

    mappedFavs = () => this.state.saved.map((cat,index)=>(
          <div key={index}>
            <img src={cat} alt={index} width="450" />
            <button onClick={()=>this.deleteFav(index)}>Delete</button>
          </div>
        )
      )
     
    render(){
        return (
          <div>
          {this.mappedFavs()}
        </div>
      )
    }
  }

export default FavImages