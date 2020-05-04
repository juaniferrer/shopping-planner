import React from "react";

const App = () => {
  return (
    <div className="ui container">
      {/* TITULO */}
      <div style={{ marginTop: 10 }}>
        <h1>Shopping Planner</h1>
      </div>
      <div
        /* FIN TITULO */

        /* MENU PRINCIPAL */
        className="ui three column doubling stackable grid container"
        style={{ marginTop: 10 }}
      >
        <div className="column">
          <div className="ui segment">
            <div className="ui center aligned icon header">
              Presupuesto
              <div className="ui labeled input" style={{ marginTop: 15 }}>
                <div className="ui label">$</div>
                <input type="number" placeholder="Ingresar monto..." />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <div className="ui center aligned icon header">
              <i class="exchange icon"></i>
              Cambiar contexto
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <div className="ui center aligned icon header">
              <i class="credit card outline icon"></i>
              Agregar medio de pago
            </div>
          </div>
        </div>
      </div>
      {/* FIN MENU PRINCIPAL */}
      {/* BOTON DE AGREGAR */}
      <div
        className="ui segment"
        style={{ backgroundColor: "rgb(171, 235, 198)", margin: 10 }}
      >
        <div className="ui center aligned icon header">
          <i class="plus circle icon"></i>
        </div>
      </div>
      {/* FIN BOTON DE AGREGAR */}
      {/* ITEM CONTAINER */}
      <div>
        <div class="ui  segment" style={{ margin: 10 }}>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
      </div>
      {/* FIN ITEM CONTAINER */}
    </div>
  );
};

export default App;
