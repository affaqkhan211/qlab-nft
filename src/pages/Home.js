import { advantages, categories, profiles, projects } from "../data"
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
                                categories.map((category) => (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <img src={category.img} alt="" />
                                            <h3>{category.name}</h3>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <h2 className="text-center mt-5 mb-5">Top Developers</h2>
                <div className="row">
                    {
                        profiles.map((profile) => (
                            <>
                                <div className="col-lg-2 col-md-3 col-sm-6 text-center mt-4 mb-4">
                                    <img src={profile.img} alt="" style={{width : "120px"}}/>
                                    <h4>{profile.name}</h4>
                                    <button className="btn btn-secondary">Linkedin</button>
                                </div>
                            </>
                        ))
                    }
                </div>

                <h2 className="text-center">Top Projects</h2>
                <div className="row">
                    {
                        projects.map((project)=>(
                            <>
                            <div className="col-lg-4 col-md-4 col-m-6 text-center">
                                <img src={project.img} alt="" />
                                <h3>{project.name}</h3>
                                <button className="btn btn-primary">{project.button}</button>
                                </div>
                            </>
                        ))
                    }
                </div>

                <h2 className="text-center">Competetive Advantages</h2>
                <div className="row">
                    {
                        advantages.map((adv) => (
                            <>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src={adv.img} alt="" />
                                <h2>{adv.heading}</h2>
                                <p>{adv.description}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home