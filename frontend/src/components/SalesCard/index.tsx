import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import axios from "axios";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard() {

  const date = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(date);
  const [maxDate, setMaxDate] = useState(new Date());
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const dmin = minDate.toISOString().slice(0,10);
    const dmax = maxDate.toISOString().slice(0,10);

    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then(res => {
        setSales(res.data.content);
      });
  }, [minDate,maxDate]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => { setMinDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => { setMaxDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {
              sales.map(element => {
                return (
                  <tr key={element.id}>
                    <td className="show992">{element.id}</td>
                    <td className="show576">{new Date(element.date).toLocaleDateString()}</td>
                    <td>{element.sellerName}</td>
                    <td className="show992">{element.visited}</td>
                    <td className="show992">{element.deals}</td>
                    <td>R$ {element.amount.toFixed(2)}</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>

    </div>
  )

}

export default SalesCard;