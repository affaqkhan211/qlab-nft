import categories from "../data"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-child text-white">
                        <h2>Not Just Another Digital Agency</h2>
                        <p>We specilaize in providing innovative digital solutions to help your business grow and succeed in the ever-changing online landscape</p>
                        <button className="home-btn btn">Explore</button>
                        <button className="home-btn btn">Get a Quote</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right-child">

                        <h2 className="text-center">Top Categories</h2>
                        <hr />
                        <div className="row">
                            {
                                categories.map((abc)=>(
                                    <>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                            <img src={abc.img} alt="" />
                                            <h3>{abc.name}</h3>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home