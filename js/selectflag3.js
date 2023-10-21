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

            // Create Button
            var button = $('<button></button>')
                .attr('id', 'flagButton')
                .css('display', 'flex')
                .appendTo(flagstrapDiv);

            var spanElement = $('<span></span>')
                .addClass('flag-icon flag-icon-' + selectedCountry.toLowerCase())
                .css('margin-right', '5px')
                .appendTo(button);

            button.append(countryNames[selectedCountry] + " (" + selectedCountry + ")");

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

                    var flagButton = flagstrapDiv.find('#flagButton');
                    flagButton.empty();
                    var buttonSpan = $('<span></span>')
                        .addClass('flag-icon flag-icon-' + country.toLowerCase())
                        .css('margin-right', '5px')
                        .appendTo(flagButton);

                    flagButton.append(countryNames[country] + " (" + country + ")");

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

            // Set data-selected-country value in the select and ul li elements
            flagstrapDiv.find('#country-select').val(selectedCountry);
            flagstrapDiv.find('#country-list li[data-country="' + selectedCountry + '"]').addClass('selected');

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
