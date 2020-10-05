import React from "react";
import Navbar from "../components/Navbar";
import "../pages/Home.css";
import Grid from "@material-ui/core/Grid";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <center>
          <div className="home__bodyTop">
            {/* <h1>WELCOME TO INTELLIGENT LUXURY</h1>
            <p>
              Deal-Daddy fuses personal styling, content, and shopping in one
              seamless digital experience driven by proprietary technology,
              e-commerce tools, and luxury fashion content.
            </p> */}
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/4/2e97512a-60be-4c16-9866-b42ce4c742421601834839541-desktopbanner_bffprebuzz.jpg" />
          </div>
        </center>
        <div className="home__bodyBottom">
          <div className="home__dealsOfTheDay">
            <h1>DEALS OF THE DAY</h1>
            <div className="hdotd__img">
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/5/f37212a2-a7e8-4e37-8728-0bc8727ca5891601882931627-Flat-1000--5-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/4/d382408a-3e92-447b-920c-da5401424d361601832832739-Min.50--9-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/5/f37212a2-a7e8-4e37-8728-0bc8727ca5891601882931627-Flat-1000--5-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/4/d382408a-3e92-447b-920c-da5401424d361601832832739-Min.50--9-.jpg" />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="home__dealsOfTheDay">
            <h1>EXPLORE TOP BRANDS</h1>
            <div className="hdotd__img">
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/5/f37212a2-a7e8-4e37-8728-0bc8727ca5891601882931627-Flat-1000--5-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/4/d382408a-3e92-447b-920c-da5401424d361601832832739-Min.50--9-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/5/f37212a2-a7e8-4e37-8728-0bc8727ca5891601882931627-Flat-1000--5-.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/4/d382408a-3e92-447b-920c-da5401424d361601832832739-Min.50--9-.jpg" />
                </Grid>
              </Grid>
            </div>
          </div>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/563014d8-2c85-495f-9b61-9b4ae4ea09b41597417752779-Freecharge_desktop-strips.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
