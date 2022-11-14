import first1 from './resources/topsect/first1.png';
import first2 from './resources/topsect/first2.png';
import second1 from './resources/topsect/second1.png';
import second2 from './resources/topsect/second2.png';



const Midsearch = () => {
    return (
        <div className="flex">
      <div className="headd">
        <h1 className="rentaplace"> Rent a <span>Place</span> away from<span> Home </span> in the <span> Metaverse </span> </h1>
        <p className="weprovideyou"> we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone </p>

        <form className="searchlocation">
          <input className="searchbox" type="text" name="" placeholder="search for location" />
          <input className="searchbtn" type="submit" name="" value="search" />
        </form>
      </div>

      <div className="pix">
        <div className="pix1">
        <img src={ first1 } alt="first1img" />
        <img src={ first2 } alt="first2img" />
        </div>
       <div className="pix2">
       <img src={ second1 } alt="second1img" />
        <img src={ second2 } alt="second2img" />
       </div>
      </div>
      </div>
    );
}
 
export default Midsearch;