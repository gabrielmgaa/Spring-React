import { BASE_URL } from "../../utils/request";
import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import "./style.css";
import { toast } from "react-toastify";

type Props = {
  saleId : number;
}

function NotificationButton( {saleId} : Props) {

  function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
      .then( () => toast.info("SMS enviado com sucesso!"));
  }

  return (
    <div className="dsmeta-red-btn" onClick={ () => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  )

}

export default NotificationButton;