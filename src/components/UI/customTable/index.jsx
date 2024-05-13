import Table from "react-bootstrap/Table";

function Tables({ thead, tbody }) {
  return (
    <div className="card m-2 spatient_registration_card" id="no-more-tables">
      <div className="row p-2">
        <div className="col-12">
          <Table striped responsive bordered className="mainTable">
            <thead>
              <tr className="card_background">
                {thead?.map((headData, index) => (
                  <th key={index}>{headData}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbody?.map((ele, index) => {
                const keys = Object.keys(ele);
                return (
                  <tr key={index}>
                    {keys.map((bodyData, inx) => (
                      <td key={inx} data-title={thead[inx]}>
                        {ele[bodyData]} &nbsp;
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Tables;
