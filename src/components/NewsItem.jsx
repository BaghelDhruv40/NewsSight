import image from '../assets/news-newspaper-text-7582783.webp'
export default function NewsItem({title,description,src,url}) {
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 h-95" style={{overflow:"hidden"}}>
          <img src={src?src:image} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title.slice(0,50)}</h5>
              <p className="card-text">{description?description.slice(0,100):"No Description"}</p>
              <a href={url} className="btn btn-primary">Read More</a>
          </div>
      </div>
    </div>
  )
}
