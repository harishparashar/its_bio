import React from "react"
import img1 from "../../images/p1.jpg"
import img2 from "../../images/p2.jpg"
import img3 from "../../images/p3.jpg"
import img4 from "../../images/p4.jpg"
import img5 from "../../images/p5.jpg"
import img6 from "../../images/p6.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../Styles/client.css'
import Header from "../../components/Header/header"

export default function Client() {
  const data = {
    tiles: [
      {
        img: img1,
      },
      {
        img: img2,
      },
      {
        img: img3,
      },
      {
        img: img4,
      },
      {
        img: img5,
      },
      {
        img: img6,
      },
    ],
  }
  return (
      <>
      <Header name="Clients" />
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="a1"></div>
        </div>
        {/* {/ <section/> /} */}
        <section>
          <div className="sec">
            <section className="">
              <div className="row">
                <div
                  style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                >
                  {data.tiles.map(elem => {
                    return (
                      <div className="img-d">
                        <img src={elem.img} />
                      </div>
                    )
                  })}
                  <div className="client_button">
                    <button>
                      add new client
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
