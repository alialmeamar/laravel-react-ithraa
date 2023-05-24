
import { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';



function tinytext() {




}

const Proposal = () => {
    const [, setData] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className="   mb-5      ">



            <div className="   container-fluid mt-3   roundedbord2  bg-white    overflow-sc overflow-scroll  bg-light  ">


                {/* صفحة تقدم الطلب  */}


                <div className="mb-3 pt-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"> عنوان الموضوع </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="عنوان الموضوع " />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">الطلب</label>

                    <Editor apiKey='9ypul5cdiabuxj80x7obi63yf6zkridab59lx35i6jod1n9g'
                        init={{
                            language: 'ar',
                            directionality: "rtl",
                            plugins: 'image ',
                            toolbar: ' undo redo | blocks | bold italic | image | align    alignleft aligncentre  alignright alignjustify | indent outdent | bullist numlist ',
                            images_upload_url: 'postAcceptor.php',
                        }} />

                    {/* الاختيارات  */}

                    <div className="text-center">

                        <div className="btn-group w-75 text-center pt-3  " dir="ltr" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check " name="btnradio" id="btnradio1" autoComplete="off" />
                            <label className="btn btn-outline-success " htmlFor="btnradio1">

                                الطلب علني : ارغب بالافصاح عن هويتي
                            </label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked />
                            <label className="btn btn-outline-danger" htmlFor="btnradio2">
                                الطلب سري :  لا ارغب بالافصاح عن هويتي
                            </label>


                        </div>
                    </div>


                    {/* <div className="btn-group w-100 text-center pt-3" role="group" aria-label="Vertical radio toggle button group">
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" checked />
            <label className="btn btn-outline-danger mx-1" htmlFor="vbtn-radio1">
              الطلب سري :  لا ارغب بالافصاح عن هويتي
            </label>
            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
            <label className="btn btn-outline-success mx-1" htmlFor="vbtn-radio2">
              الطلب علني : ارغب بالافصاح عن هويتي
            </label>

          </div> */}




                    {/*
          الراديون القديم التقليدي ( الاختيارت)

          <div className="">
            <div className="form-check form-check-reverse">
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                الطلب سري :  لا ارغب بالافصاح عن هويتي
              </label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </div>
            <div className="form-check form-check-reverse ">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                الطلب علني : ارغب بالافصاح عن هويتي
              </label>
            </div>
          </div> */}

                    {/* الاختيارات نهاية  */}

                </div>


                <div className="text-center">
                    <button type="submit" className="btn  topbtn2  text-center px-5"> تقديم </button>



                </div>

            </div>


            {/* tiny */}
            {tinytext()}

            {/* tiny */}



        </div>
    );


}

export default Proposal;

