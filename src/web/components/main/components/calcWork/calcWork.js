import React, { useLayoutEffect } from "react";

// css
import "./css/_calcWork.scss";


// tools
import { Container } from "react-bootstrap";

// jquery

import $ from "jquery";

const CalcWork = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 248,
    });
  }, []);

  window.emre = $(".calculator").clone();

  $(document).on("submit", ".calculator", function (e) {
    e.preventDefault();
    $(".calculator-result").animate({ opacity: 0 }, "fast", function () {
      $(".calculator-result")
        .html(calculate($("#inp1").val(), $("#inp2").val()).toFixed(2))
        .addClass("text-success")
        .animate({ opacity: 1 });
    });
  });

  function calculate(x, x2) {
    var result;
    x = parseInt(x);
    x2 = isNaN(parseFloat(x2)) ? 0 : parseFloat(x2);
    if (x < 2500) {
      result = x - x * 0.03 - (x - 173) * 0.14 - x * 0.005 - (x * x2) / 100;
    } else {
      result =
        x -
        x * 0.03 -
        2500 * 0.14 -
        (x - 2500) * 0.25 -
        x * 0.005 -
        (x * x2) / 100;
    }
    return isNaN(result) ? 0 : result;
  }

  return (
    <main className="calc">
      <div className="home__leftBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <div className="home__rightBanner">
        <img src={require("../../../images/left.jpg").default} alt="" />
      </div>
      <Container>
        <div class="td-page-content">
          <h1>Kredit Kalkulyatoru</h1>
          <form class="calculator">
            <div class="card bg-light">
              <div class="card-body">
                <div class="form-group">
                  <label for="inp1">
                    Hesablanmış əmək haqqını daxil edin(Gross)
                  </label>
                  <input
                    id="inp1"
                    class="form-control"
                    min="0"
                    type="text"
                    placeholder="Əmək haqqı"
                  />
                </div>
                <div class="form-group">
                  <label for="inp2">
                    Həmkarlar İttifaqı tərəfindən tutulma (Faizlə)
                  </label>
                  <div class="input-group">
                    <input
                      id="inp2"
                      class="form-control"
                      type="text"
                      placeholder="%"
                    />
                    <div class="input-group-append">
                      <span id="inputGroupPrepend2" class="input-group-text">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-center bg-light result-li">
                  <img
                    class="manat"
                    src="https://banker.az/wp-content/uploads/2018/09/icon.png"
                    alt=""
                  />
                  <span class="calculator-result text-success">0</span>
                </li>
                <li
                  class="list-group-item bg-light"
                  style={{ textAlign: "center" }}
                >
                  <button class="btn btn-outline-success">Hesapla</button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default CalcWork;
