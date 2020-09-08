import React, { useState } from 'react';
import { Button, Checkbox } from 'chayns-components/lib';
import './Form.scss';

function Form() {
    const [tipArray] = useState([parseFloat(1).toFixed(2), parseFloat(2.5).toFixed(2), parseFloat(5).toFixed(2), parseFloat(10).toFixed(2)]);
    const [tipAmount, setTipAmount] = useState(parseFloat(0).toFixed(2));
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [isAmountHidden, setIsAmountHidden] = useState(false);

    const sendIntercom = () => {
        chayns.intercom.sendMessageToPage({
            text: `Betrag: ${tipAmount}\n Ist anonym: ${isAnonymous}\n Betrag ist verborgen: ${isAmountHidden}`,
        }).then((data) => {
            if (data.status === 200) chayns.dialog.alert('', 'Thomas Mayer hat dein Trinkgeld erhalten.');
        });
    };

    const payDrink = () => {
        chayns.dialog.select({
            preventCloseOnClick: true,
            title: 'Select Dialog',
            message: 'Please select one:',
            type: 1,
            list: [{
                name: 'Original-T',
                value: 2.10,
                url: 'https://tsimg.cloud/75504-08855/ced1262d64c8f1c64c38b5e5067e44815ff75bbc_h350-w350.jpg',
            }, {
                name: 'Guinness',
                value: 5.00,
                url: 'https://tsimg.cloud/75504-08855/4e60fa491048d1df8ee7f582bf3b5bc7c9a63c2c_h350-w350.jpg',
            }, {
                name: 'London Pride',
                value: 5.40,
                url: 'https://tsimg.cloud/75504-08855/de50cb4a15d1b1ebf5bd150fcf329f89161f6747_h350-w350.png',
            }, {
                name: 'The Unbrexit',
                value: 6.60,
                url: 'https://tsimg.cloud/75504-08855/0ca3dc1c94457ebfd76adb559370d0ab4934adbe_h350-w350.jpg',
            }, {
                name: 'Heineken',
                value: 2.25,
                url: 'https://tsimg.cloud/75504-08855/1e15c5e38a1eeb9b4240810e25eff601be462edc_h350-w350.jpg',
            }, {
                name: 'Organic Pale Ale',
                value: 4.7,
                url: 'https://tsimg.cloud/75504-08855/e36bbe465c87f31d7cc783dcfa79c2b475c8b246_h350-w350.jpg',
            }, {
                name: 'Aperol Spritz',
                value: 4.95,
                url: 'https://tsimg.cloud/75504-08855/dfdcdf8a7a8c0ee8ffea66325d3b07733b06ac13_h350-w350.jpg',
            }, {
                name: 'Gin Tonic',
                value: 6.25,
                url: 'https://tsimg.cloud/75504-08855/df5c267e4fe43868127d644682d55695669e732f_h350-w350.jpg',
            }],
        }).then((data) => {
            setTipAmount(parseFloat(data.selection[0].value).toFixed(2));
        });
    };
    return (
        <div className="formList">
            <div className="dialogButtonsContainer">
                {tipArray.map((e) => (
                    <Button
                        className="amountButton"
                        onClick={() => {
                            setTipAmount(e);
                            chayns.dialog.confirm('', `Sicher, dass Du ${parseFloat(e).toFixed(2)}€ Trinkgeld geben willst?`, [{
                                text: 'Bezahlen',
                                buttonType: 1,
                            }, {
                                text: 'Abbrechen',
                                buttonType: 0,
                            }]).then((a) => {
                                if (a === 1) {
                                    sendIntercom();
                                }
                            });
                        }}
                    >
                        {`${e}€`}
                    </Button>
                ))}
            </div>
            <div className="checkboxes">
                <Checkbox
                    label="Anonym verschicken"
                    type="checkbox"
                    toggleButton
                    onChange={setIsAnonymous}
                />
                <Checkbox
                    label="Betrag verbergen"
                    type="checkbox"
                    toggleButton
                    onChange={setIsAmountHidden}
                />
            </div>
        </div>
    );
}

export default Form;
