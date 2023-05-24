

import Randomtext from "./randomtext";
import Timelinecard from "./timelinecard";



const Pageview = () => {

    const timelineiteams = [];
    // const otheriteams = [];
    for (let i = 0; i < 10; i++) {
        timelineiteams.push(<Timelinecard />);
        // otheriteams.push(<Timelinecard />);


    }




    return (
        <div>

            <div className="row pt-3">
                <div className="col-8">
                    <div className="card border-0 roundedbord">
                        <div className="mx-3 px-3 pt-3 pb-3 ">

                            <h4>  عنوان  </h4>
                        </div>
                        <Randomtext />

                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-0  roundedbord">
                        <div className="mx-3 px-3 pt-3 pb-3 text-center">
                            <h4>  الجدول الزمني للقضية  </h4>
                        </div>



                        <div className="  overflow-scroll">


                            {timelineiteams}
                            <hr />
                            {/* {otheriteams} */}
                        </div>

                        <a className="btn topbtn1  mx-2 mt-4    " href="Proposal">
                            اضافة خطوة ( اجراء)
                        </a>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Pageview;
