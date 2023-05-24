

import Requests from "./requests";

const Allrequests = () => {

    return (

        <div>


            <div className="    mt-3     roundedbord2  bg-white    overflow-sc overflow-scroll  bg-light  ">

                <div className="text-center">

                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group" dir="ltr">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                    </div>

                </div>

                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
                <Requests />
            </div>

        </div>
    )

}
export default Allrequests;

