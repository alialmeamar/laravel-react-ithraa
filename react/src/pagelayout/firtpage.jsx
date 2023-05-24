
import { useState, useEffect } from 'react';

const Firtpage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className=" ">


            {data ? <pre>{JSON.stringify(data, null, 1)}</pre> : 'Loading...'}
        </div>
    );


}

export default Firtpage;


/*

<div className="">
          <ToptitleBr/>
          <div className="row">
            <div className="col-8">

                <div className="mt-3 pt-3 bg-white rounded1   mbsh text-end px-3">
                <h5> نموذج قضية                </h5>
                <div className="  maintextpg h-100">
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,
                هذا النص عبارة عن مثال يستبدل بالنص المناسب في المنصة النهائية,

                </div>
                </div>
            </div>
            <div className="col-4">
            <div className="mt-3 pt-3 bg-light rounded1    mbsh pb-2">
                <h5> الجدول الزمني اللقضية              </h5>
                <Timelinecard/>
                <Timelinecard/>
                <Timelinecard/>
                </div>

            </div>
          </div>
        </div>
    );*/

