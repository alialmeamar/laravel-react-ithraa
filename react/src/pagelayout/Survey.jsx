
import { Link } from "react-router-dom";

const Surveypage = () => {


    return(

        <div >

          <div className="   Surveystyle ">
            <div className=" ">
                نموذج عنوان
            </div>

            <div className="arr pt-3 pb-3 ">
            <Link to="#" className="btn  btn-danger  btn-sm " href="#" role="button"> مليء الاستبانة</Link>
 <hr/>

<h6>
فترة الاستبانة

</h6>
<div className="labletext">
    من تاريخ : 1/1/2020
</div>
<div className="labletext">
    من تاريخ : 1/1/2020
</div>
             </div>
          </div>
        </div>
    );
}
export default Surveypage;