import icon from "../../assets/img/tela.svg"
import "./style.css"

function Header(){

  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={icon} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/gabriel_mgaa">@gabriel_mgaa</a>
            </p>
        </div>
    </header>
  )

}

export default Header;