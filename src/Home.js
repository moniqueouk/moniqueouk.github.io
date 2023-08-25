import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return (
                <div id="pics">
                    <img src={ require('./img/stanfordfarm.jpg') } alt="Buff Orpington in golden hour at Stanford Farm" />
                    <img src={ require('./img/bo.jpg') } alt="Bo and Claire riding bike past cactus garden"/>
                    <img src={ require('./img/ashley.jpg') } alt="Ashley in Stanford arcades" />
     
                    <img src={ require('./img/eggplant2.jpg') } alt="Stanford chicken digging in a bed of weeds"/>
                    <img src={ require('./img/matthew.jpg') } alt="Matthew & friend on a cliffside"/>
                    <img src={ require('./img/oysters.jpg') } alt="Oyster, cheese, pizza plates"/>
                    <img src={ require('./img/rainier.jpg') } alt="My beautiful black and white cow cat looking up"/>
                    <img src={ require('./img/sae.jpg') } alt="White SAE formal"/>
                    <img src={ require('./img/shadow.jpg') } alt="Shadow staring into the camera"/>


                    <img src="https://lh3.googleusercontent.com/IYlnzfEgcRoyvVB_HkmzYwW7sfvHzdVG2TW_4xvdT8lm0ZM3zKCctXUWVKo7sq0o8OaG8RM0aSVUaQ1InXvcbzLur5mque_BIgBSB6gXa9dYY3P5b4u9_rcU3MEm0Dwuh7Ozy4nbIYKcuS1HSyRw7KAGgBvo7ructz4wm0S2zHcHwF33L6z3RrzI5cdWTuxtV0Nje5hkVIwVvM5v0RiMTS6DBFlpoFadh92hxAKT0SQ4DSlgaE3z4xBT6T-yjzj72iCJqm4Cej9oUBHjIIQxm-IhRUqGMO7gTrFrtH1zuE_1nW0N8fXL3dpN9_iVB1ye3zAaE4embJBi1FuFwq_jFfVSpOQMfqKLftOtMD-mpCiG_TSrsCUq9LqC-ALMa2pctabCiSiKPJX1gxaFQN4YZctCw5X-1OnFHfsTkORZets-FoFnpytQ9eru4BAJ3_YkSRwnB9Ckzkz_ZSe0oUA_rF-MM_ybEs9wAgJyuoCsl_h3JIESzgU60k_ukJVg5PJ4WGk_DUW7U9bIVxPT6yoaJ7JI7ORZrJc_xHOliZW2lvRvuh_or_PrIS85VPRwKkZj_yqtJdQ-7GnGmSgZ-cJTvAg2nw7Fq9p3EHbaSiIXOsSJ9Uy6I-AiuwRRFDN8aCXu1-6frOvYQ46lHVE5s4sT3UHnjhtysNWGNw7og4cl72BGrxCbm1R6zaScSkZHo8LZdD2Sa9RZNrUO54CLLd0pM5naog1vI-AwHa3Og9P-kv8fBf5h=w1214-h1516-no" alt="Adrian and friend standing in main quad"/>
                    <img src={ require('./img/church.jpg') } alt ="Norcal church"/>
                    <img src={ require('./img/jason.jpg') } alt="Jason pointing at something, Lake Lag"/>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc_S_HTgUp4deocQ-m9e-iJwgZSeVrySacuw7xPPvv698e-Au9GexpZinUkTLZkp4cQ0QA_1KJvXeHYh0mWhoWubUoLSXaWnQRCGzaTy-pPgYpc6IArSnujBeJdQkA8JrZL6osg0klBFu5_S5T5lvvT-9w=w1478-h1912-s-no?authuser=0" alt="Jin-Hee singing"/>

                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8dMaNYtzgQsXz1lGtwAQChcWPT1N8PYR2emmd1Ev8lsyDVsjCziRxtys2_P2k2i8O_XwXSekRC9PbJpsk6943xie7ewTvuWoKuaYyyobO8lBTsmv9s-KtG5VqwJuZFsIf3kv6kmYv3uiSW0q8FRj4dBQ=w2868-h1912-s-no?authuser=0" alt="Sampors walking barefoot down an empty road"/>

                    <img src="https://lh3.googleusercontent.com/jQalZfXekVtF0BfNOd4m83UGAVPPJcWUIcM19uDxGlr6L9aon6uIAQSH-IazAjdtg_xbHD31vQaLZPkP7Hi-nivBG2eZToVgmkS8eTxfmmr-GyXEl0VXb9jaD17q-fVzd7xgpkAvrStfKO0GZaMJTw8y06GYM-EuNv3I2IMA-tHpQ75_QchsmqOly1YioCQ0K6eT55qmA2LoIUahfx0zxw0_tTgQCBJ3apaUUT3p8-XdSRFNlRvm7vnhfqRIHKWmLnJPOaTjTp-pjt8X6xof98egCjOwocUlJU3cF3v0rvtI3sP9QWyiBY6VYTJdCdxoR30WmM8xZt3encBMBG3JYHawz_AKug_5jRHCDzHP534zVDuYnxKa57FYclkxxH6nb0dTRWAUKtgQfhYJJBpN0eFkXrXWHFQjjlqJ-HKrjpUGevAOsiSFq3xSAn4zZQF9BON1mBAC5992fEUbRd6EgO4ILtzUwfumVm0Rle9pbDEJUBLhHFN6CtrPFQvoXGoUxcjzoe9AyX285Ol-aYU-KCi7z_ITOFc62nJ9yM_yD13hz51vyhyAyNgGTBpOht6ji8D4QrTmIUA8UVG_a58egYn0PCp4ihZJkMMa1vQy5NIHscfH6nYnIkPTjesVenKWY2Gu0QdDzIuyByN-jLbp78l6ozngxv4uHeXGHHbfp16ZbCqRsyGDe44AP-FwJUH6HjcJgoGaylJQlNP2BYmRcv6TIDKtjlTiCghWGmmkcaHBbRRc=w1242-h1518-no" alt="Cheerleader at Stanford football game"/>
                    <img src={ require('./img/eggplant.jpg') } alt="Stanford chicken walking across an empty field"/>

                            <img src="https://lh3.googleusercontent.com/pw/AIL4fc--NFVq9YKoky6gN5mYbG2PxyZy4Bn9cSQ5TE5Iiyq8xZ2BhRI-61M3uNZ5Xk9RnLkxP4wx6qmla7jO5ICxJnV0HxvochCeoMw-WtWVi6E1CL2oetTURpM4eMfvg8-K8-mO4fw6jjp5Q38jXGpOiNs_5A=w2200-h1912-s-no?authuser=0" alt="Christina's friends running down main quad, golden hour"/>
                  
                   <img src="https://66.media.tumblr.com/e1cb29d51c76d15c37a2510bb15e16c3/796c4cd69d40803b-17/s1280x1920/c204883f841981a1398b5bc7889a7048ab222641.jpg" alt="My friends walking down SF financial district"/>
                    <img src="https://66.media.tumblr.com/43fb1666734935233749533d6235fcd5/tumblr_pupie5rMeb1wlghyxo1_1280.jpg" alt="Two men standing in main quad"/>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-8I6PWRhpaWMe75FQU0_tLMlh8MteadBcphATBChNqHjJvZz2YY1UeVWYBqzqi9xI7HjIg6jr85mA4XfpZGVAj50Z9uWwhM1EVRti6iAATmcvaxLPHUITnkVUmZzACbMfECCSr3fjlnnpa8tJ3kaPzKQ=w1912-h1912-s-no?authuser=0" alt="Brandon Stanton seated in a chair on stage, overwhelmed with emotion"/>

                    <img src="https://lh3.googleusercontent.com/xSyqfnaURHZyfPfyzszsqWBOFHq8olgqMDQxpODk3xALd4YRfld4fccU0HqRrl-BbMtnwEmD1AzAyt6mAULxVYu8uc30hyvxOl4fy4Bn0pSuAF2eUy4uwxKbNhVTQ7_4f2J7sgF7eiaPUDmxbWXjWiU3WsUz0LSjpY1Yu7r9JHqW6QtYL19V30d_zl_P7mUx2_IAPPeowN1fqOOZpqAtT1Wsfv3SXe4KSZa0lFnY_NN6nO_VE4a-mFXYtDOvyqxnw1dH8cahj3PiT044ZNFIKvd9DfHTqKJmoYH_MGnQ_0C4tzaHBex0LOA5ekLf56SSuwyg0KOQiXrry8W5zuT_wGqH8UqGEnnL35G1MQySH9P6kSQj7n4YQX93ntnqicvwY1USfF8x8lVCRAmKwXtmK6ZqV5Ppe7SvDwrnwZA0X-rgWpbZT9JLk6S6r3xsMTafnsy7iAeswQsrco22jns8EpirQ4hYEUPP4PRwh4KF71Fawpp1dabWIjSz--d5mhfVheVZUIqxKQUFnkoV6wzV5tH5FjMs8_ZAasvD9AEu7gjF8K1qsA2zFcHA8vzDJglyoKFo4GjIQgyPNSJC_d-1T-UUI6MFlLCPpZWLRcLeuHgvytnHvv3thvwZ1O3V6UozGAP1WZynqwCccPs1jOXERr5m-bSF5LNO2PStrrHWduRTSUU4zLdt30_j9NSN5H1531Yi2Woszhyd1Kuzx3H-qyk4yVDpl9wIlU3ZPByY984EBEU_=w2280-h1520-no" alt="Cows at Point Reyes"/>
                    
                    <img src="https://66.media.tumblr.com/eab3f236866f0a4e53a676867e1c707e/tumblr_oy8pftxmuv1s29yaso2_1280.jpg" alt="Jason in water, Half Moon Bay"/>                       
                    <img src={ require('./img/ashland.jpg') } alt="Adam and Helen, listening to a story"/>
         
                    <img src={ require('./img/dylan.jpg') } alt="Dylan sitting on a superbloomed hill" />

                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc_pxojMzKC_0FVzdjp2-KOiX3EzcAxGVaQD4rtxL4Fv6kGilV2YcKx8pbcuyDEmTrNfYU9EEaeEVqlB9c52G6y3dIyXlfoCUplsu-P44Rv5DvIUUDCIepnAdA5q6lK8xK4zIfIC85KccP6aJAeQdFlMNA=w1526-h1912-s-no?authuser=0"alt="ashley2" alt="Ashley's grad photo, behind Green Library"/>
                   
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-pvw57pbMrdiUSScvAl2JcK1JLYZNyH7isr2v_9lVENj1G44uS-weIAiRaiIoIL8jlM79az0xinJd9DdjyE74MEkbhBPIQ375TdNez5yVBzJMhruVMAAEahCcPiSdyqXLLzYsMrETea8zeOV2lW5tP_Q=w2048-h1365-s-no?authuser=0" alt="SAE couple getting their photo taken, golden hour"/>     

                    <img src="https://lh3.googleusercontent.com/HhqKmluc3CzrxQ6IpQqGJvbT8Ou6Fyt5h9N1-mMgiMVTeL2LPUzAleqfN2mL96fwDkm66zA7drrLRbMDCw1OzGjcTv0nXgREaAvTNnjDDUlS1rDOagFqdoVcC8lHwXdsdu89ZpV8aJ7yNrjiNnoOlv0MdCW1lt-M_yEbIoiFFtoPPiGTbuSxsL2XKsidKdn03WsrsxcZ_U_rbsZPyeHqvh20e0Pk3zX-sLeqz46AZjZSIo6FUHpePauLediiBHLzjaJ-M2NJMfZNeWmepHuNDSlVnuSpSzyo6USBh16JXyfyIE8wMR60OwYU0dhcGr_B7oG35nTAC7xpkNG4zpMc5FgywCpmsdSUr9c5eqzgdsG1XEySlHGF7tC3HEbrVkN1yu5l_vRkLjkZleT9IFZX7MP3ReBltXc2iF21JQ4suezLBM7KV5rHEGUIBt6SZDELVT5g2A_NHkzgL9aauBEiUmcxVb9Y-GWaHchP4om7ETxsxipgkzgv8QsQZw3lCrBQnYmYVuqzamYKdmh0NZD6sATsgEI-codZ3Mi6cUiq2-lkDx16RtthvHNPqx-MH8mej1GNG5Xtk4VD-9Amz-6DjX5XUavc5yp0rmQFMD3fzU0X18-jcunTab_LX8HBtp0ysmeAJxKs3KKTJrNQvLJwGuF0vNgpZlWpTfgI_c5N1luG0lJx1THE6nC7SP_ne22KHuCXEBFp8iUAjva_u8G2l_JXBPL5chE1bo1psGY4DndiX55M=w1012-h1516-no" alt="Askhay standing in a field of light"/>
                    <img src={ require('./img/brian.jpg')} alt="Brian running towards shore, Ocean Beach"/>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc9D-ngWiixoJExM5WCasa7HjlnPE_elvU-aeaE98unAqtO1zZvKTYcEOh8kKWue8vtFMQ__6G7gOqjJHAT3IL_yGwW_NkOcSQvrTwDbUqip0B0LZn7K64XGh9PT0qTRxj8DYnV7RyuP_-nAleNe90qQEA=w2868-h1912-s-no?authuser=0" alt="Lizzie, laying on the floor"/>
                    <img src="https://lh3.googleusercontent.com/pw/AIL4fc9OqRuqiYPwpIbdY0OomHh6cIAeDLvg-sx0rZ_RDKuD4YGudkaFZoeIvUvMr1DYCqUTu6UgeVaydqtOPbD2SVOkTS9U9YTp9fZedBO_due0jL-7fcO11cX5NgrDkOUUQmx03V_JXAwtpTmMVv0uVE31Tg=w1274-h1912-s-no?authuser=0"alt="beautiful Sipper family, main quad"/>

                    <img src="https://lh3.googleusercontent.com/-73vNFlILqQVhdunoxBR1Lu4DzcN4eTgqXEBiPQmfUyilPTo4KEVCEIH0imCFmCWDgEbwHU2v_PaoRWPTbzjsWAdJRrIi7yQyxCbCiABsyyjmbBGm-FjoTUrkQlf3_SdYKoqZ6UjI_JTApgb0rAWux019BIR8wwiU6MGcguDNRXSlaORmpf0Hi0Y5ywp2OagMsy2Sg_zpvyLmHp2u-zCP3uri1rrUS0V8nYK4TTRiYw6CZNxOKoPXleeZbqOAViFKH8zmRC4F9dMg8kJ6j4c7yYFivEooxcL1JISXB1He-a-bFWA4TjlSZqyNV82oxWVWvJIUCw2YDA6YpBPDhuUS0mqbmqdf3RPE7RB_5ZpI2kqzXGD5DcUJsStoDY9gu6f0fPAKG57FnGTTRnz4aKRkCWtyPqlIEXSb1r3S6LWh8Jgu-XAbNq2iKsJr3Ku00PepQoddmo6tq2oAeqazC24Uqc94A_JTO7b_1s01tsDrgwJJTA3mZhnCaQc6LjwMjY6dlNqb2TU_-zvb6DX-W8BsQo4bfkmBWxvGMO59Ug1r36GFnvGNwiYqfgKyc6eYGfsgT1s7GDyMesPwyTTzBHTSQVHosRDTUWwPpvr-tvetK6JFzfiDekRQ6J4yuJpN90PUyot38aN36LHB0qbbVRMzzBDvsFHzpgOvSj-FUX7G8tEfCl-EWU9dWO1tUQbP--YoTDa7hkroQGXBbXQvBWMcRW0BC-L7_kEBpAy0E3kxnspR0HK=w2278-h1518-no" alt="Brian Chan, sitting in a bush of flowers"/>
                    <img src="https://lh3.googleusercontent.com/bfUQZadd0jqcJ8W3wIl8AhPiWcBVStQPT4l7hL7KTeVEgfnUXwujSsSAXKzgma0Jw2fBh1OuKfnxhLS9h2nQ4GuIQDHFaV75K2WVi136qf5Z9D69-7Le7NEwEa9aihs3SB8iZcGv6tjawQQWUcZt95p5dMGVoE5wOFlHcqQUzVKh9OZw0Cp4sOjT8IDN695OSgSCRVACjuRQtNIqZ1KhuvIt0hgWUw3tY8yhbJfDTLVsb2Hv1hL-s9VeJbMB6C4gA5cn6zQdOG3DqOwFzSVnALjiAR6Pk93DVzLZiWmzc2u85GrybjpMWoFP4xVjI6cBG76ZHBpQRO2GNdGgBh23FbN5b_7XsmcHxYFfIZqdcNU6O2qLRGvA4b9XhBafOk6sSrd8KExJssZ9pQLAySI-gfGEyDoHVGfByt_XUVYbYSoXMS87GMjYTryoDQ4Phz6ZD4TNre-tZk0cg1WTLv6iJSAN-H5b8L80RYNntwXJu0OBg6DDDd5pWUihWBTGVdFvJqAW_0xV2K1ZCFhZumLlviyaWIwnY5vWkmrHSZHUIOG-3FFLPgvgXLT8CQ7uS8S5CXHw3wd6AlCIU-EGYgVKv5nAK1RxAdzXIWh-zAyHy1Rj3nYy-ZqZet5gdjKYZqWsIOv6oLuBo1K5ZHDUW4O9b4gjgph6Ux1Vvv9q0sX_776iJHZi8KH6WgFJsoc5FzGFY3czE_BzX2-t_FhF--lg-bq5b6AvpNhvEZPRYPmPRZcw1OE=w1636-h1484-no" alt="Helen laughing, Tahoe"/>
                    <img src="https://lh3.googleusercontent.com/ntuDBwOEl2pqazeOHZ2RwT4w4y3w3noeMfEsZXBg_4WcD8TyqHgE1iB3yMfOC_DvoGLua5XRswqUYndghepOy8wzpdBExpUK0LdMEaN295zLHf5DinfmSPAWUmXJpZoJNXU8pwHf8MHfAJtlrI9rzLIF4TYYjAlFbJPOmReirnDmI3gKolZg5JVxIDMjMC2r7gz4TTeNqTDTZfdAhRfuK-YKZVHgi_SzULwonMaFD-ZBteKW4fzYf_VUpV8WFv0dEvErhpzG1UAAIcPVZsiY0t0FSZjULlzm6k5U4FASurfcV63hwMNPQUGYBccqPinT2fSrkUkUJFbKStoBNZLpWnNZBhySdKkU68yMak5_-tfdyEQx912lJPKoE-Du9TQCHOgv9KxYpNJG-BZ1mv05XCmFqp4IF13UKyCkFfwxqQ0dW0DIJyEoG18f4RTGsRiNmRZrgdh9Cxo5hG72qa3qoyjh-gXIYbWx2BArZ5qwrgnogga3L6c27uq_X_PvXUlxfnkBcUV8Z4G9DJYoFniipczQbloqqEyk36mMkatmPTD8CSGGyVobhvJH8lIkv2d7tpMejJLL0TJu3usZUhwQ7byqafQiqdE-uMeTYPR6268lfgRD45BGMfJe2JqYkunY8WKZ-zz1i1ALThgs4ub10us895ls6y0Z0m6si_Bg7AVilaPtZmTr7iVmbIJ7dLPcOiYjBcOCmGeRgzurzK8GQFRJtm1PBW6YIFT1ar41X7wfFsft=w1968-h1520-no" alt="Justine and friends hugging in main quad"/>

                    <img src="https://lh3.googleusercontent.com/eblgEsp4u_Y4ukzuGaiBxmm_fjYh9VzkWu7XQNZMML1TLiIUqryZqKQynm7RsE6LfA12nqOHla7IAxnYYODNCjvv4XsA-c5gFUMT8g2GPrP6XEoJ-nxAWxsK3_UwLPtYEr5Z8ZxxL3lc_2Vo8RJYDTxjRP-dOg4tYUqd8fjJwktKPpqHQ0dJYyM0fE7Wi9v-FWsFOipUI4gZhF1KeQe7UgOrrkeC5AaP3XaLFfO6t0z6wG0iFJbzYCpGaDGoQZw_TfWK2-6GhsjD2LGuqQlfnloCtSy5yC5ZI7vwyKYGAH3_X7ogB8GsOd7J3kexq4CD9mo4THmyZ9d2BrSdo3eCfaYW5Yp-s37YgoFTfCqesHs5ruTI4y_7uzJCW6crS-JXnlILHZDPddQ0FW_TFF31UucUZYpBI2RcmuDbi3Hmlp1nkwV257P7_7d5j1QiyEnuwP5lJiUAt0xDpl5THeWgeQub2SInXWufCaUr9LMc9uVlpXBR7AwWz2zCX7tlvXrHEnnMMhFYSG633A0utLNIY6m4ZsdqbsMgZpNONGVWJszt7FXvf5iRilN0Br4LJ_4irgR8KJkxdoUjfSO2-29H2o2NkWK4rJ2XTPlRx7s8DDzF_2ybLGYTfQC9v_r7puvxnHC9fksUjcc3dHS9JxEiLqOJswPRCXrqo0iBuRzeOnvHWy1owAMkQKi8NrFTMQLo6pp3ONrYYX5LvnL5cUOUUlB3svizsScrHMAEwrcSW0u3aCs=w1898-h1518-no" alt="Sarah Johnson playing field hockey(?)"/>
                    
         
                </div>
        );
    }
}

export default Home;
