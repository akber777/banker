import React, { useLayoutEffect } from "react";

// css
import "../homePage/css/_home.scss";
import "./css/_calc.scss";


// tools
import { Container } from "react-bootstrap";

const CreditCalculator = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 248,
    });
  }, []);

  function validateInputs(value) {
    //some code here to validate inputs
    if (value === null || value === "") {
      return false;
    } else {
      return true;
    }
  }

  function amort(balance, interestRate, terms) {
    //Calculate the per month interest rate
    var monthlyRate = interestRate / 12;

    //Calculate the payment
    var payment =
      balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));

    //begin building the return string for the display of the amort table
    var monthly = payment.toFixed(2);
    var totalPayment = (payment * terms).toFixed(2);
    var totalInterest = (payment * terms - balance).toFixed(2);
    // var mrgconstent = ((payment * terms) / 10).toFixed(2);

    var result =
      "<span><b>Aylıq ödəniş:</b></span> " +
      monthly +
      "</br>" +
      "<span><b>Kredit üzrə ümumi ödəniş :</b></span> " +
      totalPayment +
      "</br>" +
      "<span><b>Cəmi Faiz Ödənişi (itkisi) :</b></span> " +
      totalInterest +
      "<br/>";

    // table dalna hai

    return result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    //returns the concatenated string to the page
  }

  function getValues() {
    //button click gets values from inputs
    var balance = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(
      document.getElementById("interest").value / 100.0
    );
    var terms = parseInt(document.getElementById("terms").value);

    //set the div string
    var div = document.getElementById("Result");

    //in case of a re-calc, clear out the div!
    div.innerHTML = "";

    //validate inputs - display error if invalid, otherwise, display table
    var balVal = validateInputs(balance);
    var intrVal = validateInputs(interestRate);

    if (balVal && intrVal) {
      //Returns div string if inputs are valid
      div.innerHTML += amort(balance, interestRate, terms);
    } else {
      //returns error if inputs are invalid
      div.innerHTML +=
        "Zəhmət olmasa girişlərinizi yoxlayın və yenidən cəhd edin - etibarsız dəyərlər.";
    }
  }

  function changeMonthFromYear() {
    let inpYear = document.getElementById("years");

    let inpMonth = document.getElementById("terms");

    if (inpYear.value < 0) {
      inpYear.value = 0;
    }

    if (inpYear.value !== null && inpYear.value !== 0) {
      inpMonth.value = inpYear.value * 12;
    }
  }

  function changeYearFromMonth() {
    let inpYear = document.getElementById("years");

    let inpMonth = document.getElementById("terms");

    if (inpMonth.value < 0) {
      inpMonth.value = 0;
    }

    if (inpMonth.value !== null && inpMonth.value !== 0) {
      inpYear.value = inpMonth.value / 12;
    }
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
          <form class="loan-calu">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label for="principal">Kreditin məbləği</label>
                  </td>
                  <td>
                    <input
                      id="principal"
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for=" interest">Faiz dərəcəsi (illik %)</label>
                  </td>
                  <td>
                    <input
                      id="interest"
                      style={{ width: "100%" }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for=" terms">Müddət</label>
                  </td>
                  <td>
                    <input
                      id="years"
                      type="number"
                      onClick={() => {
                        changeMonthFromYear();
                      }}
                      onKeyUp={() => {
                        changeMonthFromYear();
                      }}
                    />{" "}
                    &nbsp; İl &nbsp;
                    <input
                      id="terms"
                      type="number"
                      onClick={() => {
                        changeYearFromMonth();
                      }}
                      onKeyUp={() => {
                        changeYearFromMonth();
                      }}
                    />{" "}
                    &nbsp;Ay
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="Result"></div>
            <hr />
            <hr />
            <table class="submit-table">
              <tbody>
                <tr>
                  <td>
                    <input
                      class="loa-btn"
                      type="button"
                      value="Hesabla"
                      onClick={() => {
                        getValues();
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="submit-table">
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default CreditCalculator;
