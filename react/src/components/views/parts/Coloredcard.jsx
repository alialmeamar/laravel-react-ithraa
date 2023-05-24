/* eslint-disable eqeqeq */
import { Link } from "react-router-dom";

function testfunc(props) {
    const a = props.cccl;
    if (a == 1) {
        return "coloerdCard pt-3 pb-3 pl-3  pr-3  px-3";
    } else {
        return "coloerdCard2 pt-3 pb-3 pl-3  pr-3  px-3";
    }
}

const Greeting = (props) => {
    return (
        <div>
            <div className={testfunc(props)}>
                <h6 className="text-end  cardtitletext   ">
                    Title

                    <hr />
                </h6>

                <div className=""></div>

                <div className="cardtext01">
                    هذا النص عبارة عن مثال , هذا النص عبارة عن مثال , هذا النص عبارة عن
                    مثال ....... هذا النص عبارة عن مثال , هذا النص عبارة عن مثال , هذا
                    النص عبارة عن مثال ....... هذا النص عبارة عن مثال , هذا النص عبارة عن
                    مثال , هذا النص عبارة عن مثال ....... هذا النص عبارة عن مثال , هذا
                    النص عبارة عن مثال , هذا النص عبارة عن مثال .......
                </div>
                <hr />
                <div className="labletext mt-0">تاريخ : 1-1-2020</div>
                <div className="labletext mt-0">تاريخ : 1-1-2020</div>
                <br />

                <Link
                    to="/pageview"
                    className="btn btn-primary btn-sm rounded-5 "
                    role="button"
                >
                    {" "}
                    قرائة التفاصيل كاملة{" "}
                </Link>
            </div>
        </div>
    );
};

const ColerdCard = (propss) => {
    const ttt = propss.title;
    const ccl = propss.cl;

    return (
        <div className=" mb-2">
            <Greeting title={ttt} cccl={ccl} />
        </div>
    );
};

export default ColerdCard;
