import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

class App extends PureComponent {

    componentDidMount() {
        chayns.dialog.select({
            multiselect: true,
            message: 'Bist du sicher, dass du *Menge*€ Trinkgeld geben willst?',
            list: [{
                name: 'Anonym verschicken',
                value: 999,
                isSelected: true,
            }, {
                name: 'Betrag verbergen',
                value: {
                    anount: 23,
                },
                isSelected: true,
            }]
        }).then((data) => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                lelelel
            </div>
        );
    }
}

export default App;
export const HotApp = hot(App);
