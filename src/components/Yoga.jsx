import React from "react";
import Timetable from "./Timetable";

export default function Yoga() {
    return (
        <div id="yoga" className="py-5 px-3 mx-auto row">
        <h2>Yoga</h2>
        <div className="col-md-8 mx-auto py-3">
          <p className="yoga-description px-3">
            Tarryn is an experienced yogi that has been working in the health and
            fitness industry since 1985. Completing the 200hr Yoga Teacher
            Training course at Yogalife in 2012 gave Tarryn what she needed to open her own
            Yoga Studio. There are many different types of yoga taught at
            Tarryn's Studio, including Hatha, Vinyasa, Sun Salutions, and Yoga
            Stretch.
          </p>
        </div>
        <div id="accordion" className="row col-md-8 mx-auto">
          <p className="tabs">
          <button
              className="btn px-5 py-2 buttons"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="false"
              aria-controls="collapse1"
            >
            
              <strong>Yoga Prices</strong>
            </button>
          
          </p>


          <div className="collapse py-3" id="collapse1" data-bs-parent="#accordion">
            <div className="card card-body">

                <div className="row">
                     <div className="py-3">
                     <h4 className="pb-2">Price per Month</h4>
                     <table className="yoga-price">
                     
                     <tr>
                          <td className="ps-3">General: </td>
                          <td className="px-1"> R 500.00</td>
                     </tr>
                     <tr>
                          <td className="ps-3">Pensioner: </td>
                          <td className="px-1"> R 250.00</td>
                     </tr>
                     <tr>
                          <td className="ps-3">Drop-in: </td>
                          <td className="px-1"> R 100.00</td>
                     </tr>
                </table>
                     </div>
                     <div className="py-3">
                     <h4 className="pb-2">Private Classes</h4>
                     <table className="yoga-price">
                     <tr>
                          <td className="ps-3">
                          30 min:
                          </td>
                          <td className="px-1">
                           R 220.00
                          </td>
                     </tr>
                     <tr>
                          <td className="ps-3">
                          60 min:
                          </td>
                          <td className="px-1"> R 380.00</td>
                     </tr>
                </table>
                     </div>
                </div>
            </div>
          </div>
        </div>

        <div id="accordion1" className="row col-md-8 mx-auto py-3">
          <p className="tabs">
            <button
              className="btn px-5 py-2 buttons"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              <strong>Yoga Schedule</strong>
            </button>
          </p>


          <div className="collapse" id="collapse2" data-bs-parent="#accordion1">
            <div className="card card-body">
    
    <Timetable/>
    
     </div>
          </div>

        </div>

        <div id="accordion3" className="row col-md-8 mx-auto">
          <p className="tabs">
          
            <button
              className="btn px-5 py-2 buttons"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
             <strong>Types of Yoga</strong> 
            </button>
          </p>

          <div className="collapse py-3" id="collapse3" data-bs-parent="#accordion3">
            <div className="card card-body px-4">
            <div className="vinyasa pt-2">
              <h4>Vinyasa</h4>
              <p className="yoga-desc">Vinyasa yoga is often referred to as "flow" yoga as the traditional yoga poses are practiced in a fluid sequence using the breath to connect each posture. The movements in between each pose are known as "transitions", and each yoga instructor has the freedom to create their own sequence of poses and transitions to create a unique style of Vinyasa yoga. The constant flow of movement makes Vinyasa one of the more dynamic and stimulating forms of yoga. </p>
            </div>
            <div className="hatha">
              <h4>Hatha</h4>
              <p className="yoga-desc">Hatha yoga is a slower style of yoga where poses are held for longer periods of time, with focus on body positioning and breath. Many hatha classes invlove pranayama practices, which involves various breathing techniques. Hatha yoga is about focus and endurance.</p>
            </div>
            <div className="sunSalutations">
              <h4>Sun Salutations</h4>
              <p className="yoga-desc">Sun Salutations is a sequence of yoga poses which are performed together with strict breath-work. There are two types of Sun salutation sequences (Sun Salutations A and B), and both sequences include a handful of poses which are repeated in the same order, using the same breathing pattern throughout. 108 Sun Salutations is an age old practice of repeating Sun Saltation A one-hundred-and-eight times. At Tarryn's Studio there is an early morning class of 108 Sun Salutations (which takes a surprisingly short time of 30 minutes).</p>
            </div>
        
            <div className="stretch">
              <h4>Yoga Stretch</h4>
              <p className="yoga-desc">Yoga Stetch is a unique yoga style taught at Tarryn's Studio on a friday. These stretch classes are greatly looked forward to after the long week to relieve (usually quite stiff) muscles. The yoga stretch classes are relatively slow paced and consist of yoga poses that focus on stretching your muscles, releasing muscle tension, and increasing your range of motion.</p>
            </div>
         
            </div>
          </div>

        </div>

      </div>
    )
}