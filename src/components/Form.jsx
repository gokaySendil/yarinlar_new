import { useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
const Form =  () => {
  // https://www.emailjs.com/docs/examples/reactjs/
  const form = useRef();
  const [isSubmitting,setSubmitting] = useState(false);
  function handleCloseModal() {
    document.getElementById("staticBackdrop").classList.remove("show");
    document.getElementById("staticBackdrop").style = "display:none;";
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
    document.body.classList.remove("modal-open");
    document.body.style = "overflow:visible;";
  }
  const sendEmail = async(e) => {
      e.preventDefault();
      if(form.current["user_name"].value === ""){
          form.current["user_name"].classList.add('is-invalid')
      }
      if(form.current["user_tel"].value === ""){
          form.current["user_tel"].classList.add('is-invalid')
          

      }
      if(form.current["user_order"].value === "Hizmet Türünü Seçiniz"){
          
          form.current["user_order"].classList.add('is-invalid')
      }
      else{
        setSubmitting(true)
         await emailjs.sendForm('modal_fiyat', 'template_rp7w5si', form.current, '5o-aF0L7iyhCFjnZ1')
    .then((result) => {
        toast.success(
            "Mesajınızı aldık! En kısa zamanda dönüş yapacağız.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
            
          );
          setSubmitting(false)
          handleCloseModal();
    }, (error) => {
        console.log(error.text);
    });
      }

    };
  return (
      <form className='form-container needs-validation p-0 m-0 text-center' onSubmit={sendEmail} ref={form}>
          <h2 className='mt-5 mb-5 form-title '>Fiyat Al</h2>
          <div className='row'>
              <div className='col'>
              <div className="form-floating mb-3">
              <input name="user_name" type="text" className="form-control" id="floatingInput" placeholder="İsim Soyisim"  />
              <label htmlFor="floatingInput">İsim Soyisim</label>
          </div>
          <div className="form-floating mb-3">
              <input name="user_tel"type="text" className="form-control" id="phone" placeholder="555 555 55 55" 
                  data-mdb-input-mask="555 555 55 55" />
              <label htmlFor="phone">Telefon Numarası</label>
          </div>
          <select defaultValue={"Hizmet Türünü Seçiniz"} className="form-select mb-3" aria-label="Default select example" name="user_order" >
              <option disabled hidden>Hizmet Türünü Seçiniz</option>
              <optgroup label="Araç Sigortaları">
                  <option>Trafik Sigortası</option>
                  <option>Kasko</option>
                  <option>IMM</option>
              </optgroup>
              <optgroup label="Sağlık Sigortaları">
                  <option>Tamamlayıcı Sağlık</option>
                  <option>Özel Sağlık</option>
                  <option>Seyahat Sağlık</option>
                  <option>Yabancı Sağlık</option>
              </optgroup>
              <optgroup label="Araç Sigortaları">
                  <option>Trafik Sigortası</option>
                  <option>Kasko</option>
                  <option>IMM</option>
              </optgroup>
              <optgroup label="Emekllik ve Hayat Sigortaları">
                  <option>Bireysel Emeklilik</option>
                  <option>Hayat Sigortası</option>

              </optgroup>
              <optgroup label="Konut ve İşyeri Sigortaları">
                  <option>Dask Sigortası</option>
                  <option>Ev ve Eşya Sigortaları</option>
                  <option>Site Apartman Paket</option>
                  <option>İşyeri Sigortası</option>
              </optgroup>
              <optgroup label="Sorumluluk Sigortaları">
                  <option>Mesleki Sorumluluk Sigortası</option>
                  <option>Sorumluluk Sigortası</option>

              </optgroup>
              <optgroup label="Diğer Branşlar">
                  <option>Nakliyat Sigortası</option>
                  <option>Tekne Sigortası</option>
                  <option>İnşaat All Risk</option>
              </optgroup>
              <option label="Üsteki branşlar dışında bilgi istiyorum"></option>
          </select>
         <center> <center>
            {" "}
            {isSubmitting && (
              <button
                disabled={isSubmitting}
                type="submit"
                className="my-primary-btn"
              >
               <div class="spinner-border text-light" role="status">
                <span class="sr-only">Gönderiliyor...</span>
                </div>
              </button>
            )}
             {!isSubmitting && (
              <button
                disabled={isSubmitting}
                type="submit"
                className="my-primary-btn"
              >
                Beni Ara
              </button>
            )}
           
          </center></center>
              </div>
          </div>
      </form>
  )
};

export default Form;
