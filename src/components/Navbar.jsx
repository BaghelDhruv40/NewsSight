
export default function Navbar({setCategory,setCountry}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsSight</span>
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="nav-item">
                <div className="nav-link dropdown-item" onClick={()=>setCategory("technology")}>Technology</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link dropdown-item" onClick={()=>setCategory("business")}>Business</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link dropdown-item" onClick={()=>setCategory("health")}>Health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link dropdown-item" onClick={()=>setCategory("sports")}>Sports</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link dropdown-item" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                </li>
              </ul>
            </li>
            <ul className="navbar-nav mx-3">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="nav-item d-flex justify-content-center" style={{width:"250px"}}>
                <div className="input-group mb-3 w-75 mt-3 mx-2">
                  <input type="text" className="form-control" placeholder="Country" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary w-50 " type="button" id="button-addon2" onClick={()=>{
                    let value=document.querySelector(".form-control").value;
                    if (value!=="us"){
                      alert("Sorry! only United States(us) is available");
                    }
                    else{
                    setCountry();
                    document.querySelector(".form-control").value="";
                    }
                  }}>Find</button>
                </div>
                </li>
                
              </ul>
            </li>
            </ul>
          </ul>
        </div>

        

      </div>
    </nav>
  )
}
