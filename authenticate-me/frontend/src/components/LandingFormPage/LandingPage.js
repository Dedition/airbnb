import React from 'react';
import './LandingFormPage.css';
import Banner from './Banner';

export default function LandingPage() {
    return (
        <div className='home'>
            <div className='home-banner'>
                <Banner />
            </div>
        </div>
    )
}


// const Landing = props => {
//     return (
//         <div className="header_container-outer">
//             {/* <Header /> */}
//             <div className="header_search-wrapper">
//                 <h1 className="header_search-header">
//                     Help Leo get a job
//                 </h1>
//                 {/* <Header ended> */}
//                 <div className="header_search-form-wrapper">
//                 </div>
//             </div>
//             <div className="desc-container">
//                 <p className="desc-content"></p>
//                 <button>Learn More</button>
//             </div>
//         </div>
//     );
// }


// export default Landing;
