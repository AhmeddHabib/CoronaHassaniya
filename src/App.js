import React from 'react';

import { ZerlVogani, IkhtarDawla, Chart} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

//import rapp from './components/Rapp/rapp.jsx';


import image from './images/image.png';
import ta9rir from './images/ta9rir.png';
var listOfImages =[];
class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
}
componentWillMount() {
    listOfImages = this.importAll(require.context('./images/Rapports/', false, /\.(png|jpe?g|svg)$/));
   
}

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
    
  

  render() {
    const { data, country } = this.state;

    //const testFolder = './rapports/';
    //const fs = require('fs');
   
   // fs.readdir(testFolder, (err, files) => {
    //  files.forEach(file => {
       // console.log(file);
     // });
    //});
   


    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="1 2 3 4 5 Allah akhbar" />
        <ZerlVogani data={data} />
        <IkhtarDawla handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <p >التقرير اليومي لوزارة الصحة</p>
        <img className={styles.image} src={ta9rir} alt="rapport quotidien" />
        <div> 
              {
                    listOfImages.map(
                      (image, index) =>   <img key={index} src={image} alt="info"></img>
                    )
              }
          </div>
      </div>
    );
  }
}

export default App;