(function ($) {
    $.fn.selectflag3 = function (options) {
        var countryNames = options.countries;

        function callbackFunction(country) {
            options.onSelect(country, this);
        }

        return this.each(function () {
            var flagstrapDiv = $(this).addClass('selectflag3');
            var selectedCountry = flagstrapDiv.data('selected-country');
            var countries = Object.keys(countryNames);

            // Check if data-selected-country exists, if not, set a default value
            if (!selectedCountry) {
                selectedCountry = null; // set selectedCountry to null
                flagstrapDiv.data('selected-country', selectedCountry);
            }

            // Create Button
            var button = $('<button></button>')
                .attr('id', 'flagButton')
                .css('display', 'flex')
                .appendTo(flagstrapDiv);

            var spanIcon = $('<span id="arr-icn"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2L10 10L2 2" stroke="#808080" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>')
                .appendTo(button);

            var spanElement = $('<span></span>')
                .addClass('flag-icon flag-icon-' + (selectedCountry ? selectedCountry.toLowerCase() : 'default'))
                .css('margin-right', '5px')
                .appendTo(button);

            var buttonText = $('<span></span>').appendTo(button);

            updateButtonText();

            // Create Select Element
            var selectElement = $('<select></select>')
                .attr('id', 'country-select')
                .css('display', 'none')
                .appendTo(flagstrapDiv);

            // Add Options to Select Element
            countries.forEach(function (value) {
                var optionElement = $('<option></option>')
                    .attr('value', value)
                    .text(countryNames[value])
                    .appendTo(selectElement);
                if (value === selectedCountry) {
                    optionElement.attr('selected', 'selected');
                }
            });

            // Create UL Element
            var ulElement = $('<ul></ul>')
                .attr('id', 'country-list')
                .css('display', 'none')
                .appendTo(flagstrapDiv);

            // Add Li Items to UL Element
            countries.forEach(function (value) {
                var liElement = $('<li></li>')
                    .attr('data-country', value)
                    .css('display', 'flex')
                    .css('align-items', 'center')
                    .appendTo(ulElement);
                if (value === selectedCountry) {
                    liElement.addClass('selected');
                }

                var spanElement = $('<span></span>')
                    .addClass('flag-icon flag-icon-' + value.toLowerCase())
                    .css('margin-right', '5px')
                    .appendTo(liElement);

                liElement.append(countryNames[value] + " (" + value + ")");

                liElement.on('click', function () {
                    var country = $(this).data('country');
                    var countrySelect = flagstrapDiv.find('#country-select');
                    countrySelect.val(country);

                    updateButtonText(country);

                    var liList = flagstrapDiv.find('#country-list li');
                    liList.removeClass('selected');
                    $(this).addClass('selected');

                    var options = countrySelect.find('option');
                    options.removeAttr('selected');
                    countrySelect.find('option[value="' + country + '"]').attr('selected', 'selected');

                    // Call the callback function here
                    callbackFunction(country);

                    // Hide the country list after selection
                    flagstrapDiv.find('#country-list').hide();
                });
            });

            function updateButtonText(country) {
                if (country) {
                    buttonText.text(countryNames[country] + " (" + country + ")");
                    spanElement.attr('class', 'flag-icon flag-icon-' + country.toLowerCase()).css('margin-right', '5px');
                } else {
                    buttonText.text(options.placeholder.text);
                    spanElement.attr('class', 'flag-icon flag-icon-' + (selectedCountry ? selectedCountry.toLowerCase() : 'default')).css('margin-right', '5px');
                }
            }

            // Set data-selected-country value in the select and ul li elements
            if (selectedCountry) {
                flagstrapDiv.find('#country-select').val(selectedCountry);
                flagstrapDiv.find('#country-list li[data-country="' + selectedCountry + '"]').addClass('selected');
            }

            // Hide and show the #country-list on flagButton click
            flagstrapDiv.find('#flagButton').on('click', function () {
                flagstrapDiv.find('#country-list').toggle();
                flagstrapDiv.toggleClass('selectflag3-active');
                $(this).toggleClass('flagButton-active');
            });

            // Hide #country-list if clicked outside of .selectflag3
            $(document).on('click', function (event) {
                if (!$(event.target).closest('.selectflag3').length) {
                    flagstrapDiv.find('#country-list').hide();
                    flagstrapDiv.removeClass('selectflag3-active');
                    flagstrapDiv.find('#flagButton').removeClass('flagButton-active');
                }
            });
        });
    };
})(jQuery);
