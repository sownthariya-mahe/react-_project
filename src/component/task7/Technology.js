import React from "react";
import first from './fist.jpg';
import sec from './ts2.png';
import third from './3rd.png';
import four from './4th.jpg';
export function Technology(){
    return(
        <>
        <div className="bgt p-3 m-3">
            <div  className="text-center">
                <h1>Learn 4.0 Technologies</h1>
                <p>Get Trained by Alumini of IIT's and top Schools keep in touch with their alumni through their career services or alumni offices. These offices can help you find alumni working in your target field or company, and you can schedule your interview with them. You can find alumni who are working in your target field from your school alumni database, too. </p>
            </div>
            <div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card br b-3" >     
      <div class="card-body br ">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Data scientists are a new breed of analytical data expert who have the technical skills to solve complex problems and the curiosity to explore what problems need to be solved. They're part mathematician, part computer scientist and part trend-spotter.</p>
      </div>
      <div className="container-fluid ">
        <div className="col-4"> </div>
        <div className="col-4"> </div>
        <div className="col-4 float-end"><img src={first} className="col-8 imgi"></img></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bb">
     
      <div class="card-body bb  b-3">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">IoT developers possess the skills of machine learning and big data management that helps them in making predictions based on the identification of data patterns. Every company needs skilled IoT developers </p>
      </div>
      <div className="container-fluid ">
        <div className="col-4"> </div>
        <div className="col-4"> </div>
        <div className="col-4 float-end"><img src={sec} className="col-8 imgi"></img></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bb">
      
      <div class="card-body bb b-3">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create a layer of</p>
      </div>
      <div className="container-fluid ">
        <div className="col-4"> </div>
        <div className="col-4"> </div>
        <div className="col-4 float-end"><img src={third} className="col-8 imgi"></img></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card br">
      
      <div class="card-body br b-3">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
      </div>
      <div className="container-fluid ">
        <div className="col-4"> </div>
        <div className="col-4"> </div>
        <div className="col-4 float-end"><img src={four} className="col-8 imgi"></img></div>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        </>
    );
}