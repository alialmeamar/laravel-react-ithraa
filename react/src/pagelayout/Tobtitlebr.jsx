
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
const ToptitleBr = ({ datapass }) => {

    return (
        <div className="toptitlebr mt-3 px-5 pt-4">

            <div className="row">
                <div className="  d-inline-block ">


                    {/* المعلومات */}

                    <div className="row titlemain position-relative">
                        <div className="col">
                            الاسم :
                            {datapass.name}


                            <span className=" px-2 mx-3 badge bg-primary rounded-pill fw-lighter">({datapass.email})</span>

                        </div>
                        <div>
                            <Link to="Proposal" className="btn topbtn1  mx-2 mt-4 btnpos1  " >
                                تقديم مقترح
                            </Link>
                            <Link to="Proposal" className="btn topbtn2 mx-2  mt-4  btnpos2"  >
                                تقديم شكوى
                            </Link>
                        </div>

                    </div>
                    <div className="row titlesub pt-3">
                        <div className="col-lg-3 col-md-12 ">
                            القسم  : مركز الكفيل
                        </div>
                        <div className="col-lg-3 col-md-12">
                            الشعبة  : مركز الكفيل
                        </div>
                        <div className="col-lg-3 col-md-12">
                            الوحدة  : مركز الكفيل
                        </div>
                    </div>


                </div>

                <div className="col-3   ">



                    {/* الأزرار  */}



                </div>

            </div>



        </div>

    );
}

ToptitleBr.propTypes = {
    datapass: PropTypes.any.isRequired,
};

export default ToptitleBr;
