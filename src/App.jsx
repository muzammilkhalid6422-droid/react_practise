import './App.css'

function App() {

  return (
    <>
   <div className="container">
    <div className="main">
      <div className="child">
        <img src="./child-1.jpeg" alt="Image Not found" />
      </div>
      <div className="child-1">
        <div className="child1">
          <img src="./chilld-2 top.jpeg" alt="Image Not found" />
        </div>
        <div className="child2">
          <img src="child-2 left.jpeg" alt="Image Not found" />
          <img src="child-2 right.jpeg" alt="Image Not found" />

        </div>
      </div>
    </div>
    <div className="body">
      <div className="child1">
        <div className="navbar">
          <div className="logo">
            <h3>Don't Miss</h3>
          </div>
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Style Hunter</a></li>
            <li><a href="#">Vogu</a></li>
            <li><a href="#">Health & fitness</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Gaduget</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
        <hr />
        <div className="content">
          <div className="left">
            <img src="./left.jpeg" alt="" />
            <p><h2>Top Fashion Trend To Look For <br /> Every Collection</h2></p>
            <p><b>Armin Vans</b>  August 7 2026 </p>
          </div>
          <div className="right">
            <div className="one">
              <div className="div">
                <img src="./Spring.jpeg" alt="" /> 
              </div>
             <div className="detail">
               <p><b>Spring Fashion Show at  <br />University of Islamia <br /> started</b> <br />August 7 2025</p>
              
             </div>
            </div>
             <div className="one">
              <div className="div">
                <img src="./Study.jpeg" alt="" /> 
              </div>
             <div className="detail">
               <p><b>Study 2020: Fake Enga<br />gment is One half of the <br />problem</b> <br />August 7 2019</p>
              
             </div>
            </div>
              <div className="one">
              <div className="div">
                <img src="./laptop.jpeg" alt="" /> 
              </div>
             <div className="detail">
               <p><b>Laptop with 128 bit processor, <br /> 32 GB Ram and 24MP Front  <br />Camera</b> <br />August 7 2019</p>
              
             </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="child2">
        <h3>Stay Connected</h3>
        <hr />
        <div className="fb">
          <img src="./fb.jpeg" alt="Image not found" />
          <p><b>22030 Fans  Like </b>  </p>
        </div>
        <div className="fb">
          <img src="./x.jpeg" alt="Image not found" />
          <p><b>2230 Fans  Like </b>  </p>
        </div>
        <div className="fb">
          <img src="./yt.jpeg" alt="Image not found" />
          <p><b>22030 Subscriber  Like </b>  </p>
        </div>

        <h3>Make it Modern</h3>
        <hr />
        <div className="imge">
          <img src="./l.jpeg" alt="Not found" />
          <img src="./r.jpeg" alt="Not Found" />
        </div>
      </div>
    </div>
   </div>
    </>
   
  )
}

export default App
