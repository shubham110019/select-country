jQuery.fn.selectflag3 = function (options) {
    var countryNames = options.countries;

    function callbackFunction(country) {
        options.onSelect(country, this);
    }

    return this.each(function () {
        var containerId = this.id;
        Selectflag3.init(containerId, countryNames, callbackFunction);
    });
};

var Selectflag3 = (function () {
    function init(containerId, countryNames, callbackFunction) {
        var flagstrapDiv = document.getElementById(containerId);
        var selectedCountry = flagstrapDiv.getAttribute('data-selected-country');
        var countries = Object.keys(countryNames);

        // Create Button
        var button = document.createElement('button');
        button.id = 'flagButton';
        button.style.display = 'flex';

        var spanElement = document.createElement('span');
        spanElement.className = 'flag-icon flag-icon-' + selectedCountry.toLowerCase();
        spanElement.style.marginRight = '5px';

        button.appendChild(spanElement);
        button.appendChild(document.createTextNode(countryNames[selectedCountry] + " (" + selectedCountry + ")"));
        flagstrapDiv.appendChild(button);

        // Create Select Element
        var selectElement = document.createElement('select');
        selectElement.id = 'country-select';
        selectElement.style.display = 'none';
        flagstrapDiv.appendChild(selectElement);

        // Add Options to Select Element
        countries.forEach(function (value) {
            var optionElement = document.createElement('option');
            optionElement.value = value;
            optionElement.text = countryNames[value];
            if (value === selectedCountry) {
                optionElement.setAttribute('selected', 'selected');
            }
            selectElement.appendChild(optionElement);
        });

        // Create UL Element
        var ulElement = document.createElement('ul');
        ulElement.id = 'country-list';
        flagstrapDiv.appendChild(ulElement);

        // Add Li Items to UL Element
        countries.forEach(function (value) {
            var liElement = document.createElement('li');
            liElement.setAttribute('data-country', value);
            liElement.style.display = 'flex';
            liElement.style.alignItems = 'center';
            if (value === selectedCountry) {
                liElement.classList.add('selected');
            }

            var spanElement = document.createElement('span');
            spanElement.className = 'flag-icon flag-icon-' + value.toLowerCase();
            spanElement.style.marginRight = '5px';

            liElement.appendChild(spanElement);
            liElement.appendChild(document.createTextNode(countryNames[value] + " (" + value + ")"));
            ulElement.appendChild(liElement);

            liElement.addEventListener('click', function () {
                var country = this.getAttribute('data-country');
                var countrySelect = document.getElementById('country-select');
                countrySelect.value = country;

                var flagButton = document.getElementById('flagButton');
                flagButton.innerHTML = '';
                var buttonSpan = document.createElement('span');
                buttonSpan.className = 'flag-icon flag-icon-' + country.toLowerCase();
                buttonSpan.style.marginRight = '5px';
                flagButton.appendChild(buttonSpan);
                flagButton.appendChild(document.createTextNode(countryNames[country] + " (" + country + ")"));

                var liList = document.querySelectorAll('#country-list li');
                liList.forEach(function (li) {
                    li.classList.remove('selected');
                });
                this.classList.add('selected');

                var options = countrySelect.options;
                for (var i = 0; i < options.length; i++) {
                    options[i].removeAttribute('selected');
                }
                countrySelect.querySelector('option[value="' + country + '"]').setAttribute('selected', 'selected');

                // Call the callback function here
                callbackFunction(country);
            });
        });
    }

    return {
        init: init
    };
})();