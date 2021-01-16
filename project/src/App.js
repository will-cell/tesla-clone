import './App.css';
import Header from './components/Header'
import Item from './components/Item'
import Accessories from './assests/Desktop-Accessories.jpg'; 
import ModelS from './assests/Desktop-ModelS.jpeg'; 
import ModelX from './assests/Desktop-ModelX.jpeg'
import Model3 from './assests/Desktop-Model3.jpeg'; 
import ModelY from './assests/Desktop-ModelY.jpeg'; 
import SolarPanels from './assests/Desktop-SolarPanels.jpeg'
import SolarRoof from './assests/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
          <Header />
          <div className="app__itemsContainer">
              <Item
                  title='Lowest cost solar panels in USA'
                  desc='Money back guarantee'
                  descLink=""
                  backgroundImg={SolarPanels}
                  leftBtnText='ORDER NOW'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              />
              <Item
                  title='Model S'
                  desc='$69,420'
                  descLink=""
                  backgroundImg={ModelS}
                  leftBtnText='CUSTOM ORDER'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
              <Item
                  title='Model 3'
                  desc='$69,420'
                  descLink=""
                  backgroundImg={Model3}
                  leftBtnText='CUSTOM ORDER'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
              <Item
                  title='Model X'
                  desc='$69,420'
                  descLink=""
                  backgroundImg={ModelX}
                  leftBtnText='CUSTOM ORDER'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
              <Item
                  title='Model Y'
                  desc='$69,420'
                  descLink=""
                  backgroundImg={ModelY}
                  leftBtnText='CUSTOM ORDER'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
              <Item
                  title='Solar Roof'
                  desc='Money back guarentee'
                  descLink=""
                  backgroundImg={SolarRoof}
                  leftBtnText='SHOP NOM'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
              <Item
                  title='Accessories'
                  desc='Money back guarentee'
                  descLink=""
                  backgroundImg={Accessories}
                  leftBtnText='SHOP NOM'
                  leftBtnLink=''
                  rightBtnText='LEARN MORE'
                  rightBtnLink=''
                  twoButtons='true'
                  first
              
              />
          </div>
    </div>
  );
}

export default App;
