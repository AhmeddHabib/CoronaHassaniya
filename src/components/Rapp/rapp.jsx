
import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages =[];

class rapp extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../Rapports/', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(
          <div>
              {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info"></img>
                    )
              }
          </div>
        )
    }
}
export default rapp;