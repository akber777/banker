import React, { useLayoutEffect } from 'react';

// css
import './css/_calcWorkNew.scss';
import '../calcWork/css/_calcWork.scss';
import "../homePage/css/_home.scss";



// tools
import { Container } from 'react-bootstrap';

// jquery

import $ from 'jquery';

const CalcWorkNew = () => {


    useLayoutEffect(() => {

        window.scrollTo({
            top: 248
        });



        var $calc = $('form.calculator');
        $calc.submit(function (e) {
            e.preventDefault();
            $('.calculator-result').stop().animate({ opacity: 0 }, 'fast', function () {
                $('.calculator-result').html(calculate()).addClass('text-success').animate({ opacity: 1 });
            });
            return !1;
        });

        function calculate() {
            var g = $calc.find('#is_gov').val() || '',
                s = (+$calc.find('#inp1').val()) || 0,
                p = (+$calc.find('#inp2').val()) || 0,
                result = 0;
            g = g === '1' ? 1 : 0;
            s = !isNaN(s) ? s : 0;
            p = !isNaN(p) ? p : 0;

            if (s > 0) {
                if (g === 1) {
                    if (s < 2500) {
                        result = s - s * 0.03 - ((s - 173) * 0.14) - s * 0.005 - s * p / 100;
                    } else {
                        result = s - s * 0.03 - 2500 * 0.14 - ((s - 2500) * 0.25) - s * 0.005 - s * p / 100;
                    }
                    /*if(s > 200) {
                        result = s - (s - 200) * 0.14 - s * 0.035;
                    } else {
                        result = s;
                    }*/
                }
                else {
                    if (s > 200) {
                        if (s > 8000) result = s - ((s - 8000) * 0.14 + 200 * 0.03 + (s - 200) * 0.1 + s * 0.005);
                        else result = s - (200 * 0.03) - (s - 200) * 0.1 - s * 0.005;
                    }
                    else result = s - s * 0.03 - s * 0.005;
                }
            }
            return isNaN(result) ? 0.00 : result.toFixed(2);
        }

    }, [])







    return (
        <main className='calc'>
            <div className='home__leftBanner'>
                <img src={require('../../../images/left.jpg').default} alt='' />
            </div>
            <div className='home__rightBanner'>
                <img src={require('../../../images/left.jpg').default} alt='' />
            </div>
            <Container>
                <div class="td-page-content">
                    <h1>Kredit Kalkulyatoru</h1>
                    <form class="calculator">
                        <div class="card bg-light">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="is_gov">İşlədiyiniz sektoru seçin</label>
                                    <select class="form-control" id="is_gov">
                                        <option value="1" selected="">Dövlət və neft-qaz sektoru</option>
                                        <option value="0">Qeyri-dövlət və neft-qaz sektorunda işləməyən</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="inp1">Hesablanmış əmək haqqını daxil edin(Gross)</label>
                                    <input id="inp1" class="form-control" min="0" type="text" placeholder="Əmək haqqı" />
                                </div>
                                <div class="form-group">
                                    <label for="inp2">Həmkarlar İttifaqı tərəfindən tutulma (Faizlə)</label>
                                    <div class="input-group">
                                        <input id="inp2" class="form-control" type="text" placeholder="0.0" />
                                        <div class="input-group-append">
                                            <span id="inputGroupPrepend2" class="input-group-text">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center bg-light result-li">
                                    <img class="manat" src="https://banker.az/wp-content/uploads/2018/09/icon.png" alt='' />
                                    <span class="calculator-result">0.00</span>
                                </li>
                                <li class="list-group-item bg-light" style={{ textAlign: 'center' }}>
                                    <button class="btn btn-outline-success">Hesabla</button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </Container>
        </main >
    );
}

export default CalcWorkNew;
