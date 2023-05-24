import ColerdCard from "./parts/Coloredcard";
import Survey from "./parts/Survey";
const MainPGCol = () => {

    return (
        <div className="">
            <div className="row mt-3  ">
                <div className="col-lg-4 col-md-12   ">
                    <div className="  card border-0    roundedbord rounded1   pt-2 px-1  text-center ">
                        <div className="row con">

                        </div>
                        <div className="row cont"></div>
                        الشكاوى التي قدمتها
                        <hr />
                        {/* class=grdn for grediant === deleted
                        <div className="grdn">
                            <br/>
</div>

                       */}


                        {/* class=minmarg  === deleted


                       */}
                        <div className="overflowcols    roundedbord rounded1   ">

                            <ColerdCard title="عنوان" cl="1" />
                            <ColerdCard title="احمد" cl="2" />
                            <ColerdCard title="مثال" cl="1" />
                            <ColerdCard title="عنوان" cl="1" />
                            <ColerdCard title="احمد" cl="2" />
                            <ColerdCard title="مثال" cl="1" />
                        </div>

                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-5  ">
                    <div className=" border-0 card rounded1 roundedbord pt-2 px-1 text-center  ">
                        المقترحات التي قدمتها
                        <hr />


                        <div className="overflowcols rounded1">
                            <ColerdCard title="2مثال" cl="2" />
                            <ColerdCard title="احمد" cl="1" />
                            <ColerdCard title="مثال" cl="2" />
                            <ColerdCard title="مثال" cl="2" />
                            <ColerdCard title="احمد" cl="1" />
                            <ColerdCard title="مثال" cl="2" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-5 ">
                    <div className=" border-0 card rounded1 roundedbord  pt-2 text-center   ">
                        الاستبانات المقدمة من قبل الادارة
                        <hr></hr>
                        <div className="overflowcols rounded1 ">
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                            <Survey />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default MainPGCol;
