(function ($) {
    $.fn.selectflag3 = function (options) {
        // var countryNames = options.countries;
        var defaultCountryNames = {
            'AF': 'Afghanistan',
            'AX': 'Åland Islands',
            'AL': 'Albania',
            'DZ': 'Algeria',
            'AS': 'American Samoa',
            'AD': 'Andorra',
            'AO': 'Angola',
            'AI': 'Anguilla',
            'AQ': 'Antarctica',
            'AG': 'Antigua and Barbuda',
            'AR': 'Argentina',
            'AM': 'Armenia',
            'AW': 'Aruba',
            'AU': 'Australia',
            'AT': 'Austria',
            'AZ': 'Azerbaijan',
            'BS': 'Bahamas',
            'BH': 'Bahrain',
            'BD': 'Bangladesh',
            'BB': 'Barbados',
            'BY': 'Belarus',
            'BE': 'Belgium',
            'BZ': 'Belize',
            'BJ': 'Benin',
            'BM': 'Bermuda',
            'BT': 'Bhutan',
            'BO': 'Bolivia, Plurinational State of',
            'BQ': 'Bonaire, Sint Eustatius and Saba',
            'BA': 'Bosnia and Herzegovina',
            'BW': 'Botswana',
            'BV': 'Bouvet Island',
            'BR': 'Brazil',
            'IO': 'British Indian Ocean Territory',
            'BN': 'Brunei Darussalam',
            'BG': 'Bulgaria',
            'BF': 'Burkina Faso',
            'BI': 'Burundi',
            'KH': 'Cambodia',
            'CM': 'Cameroon',
            'CA': 'Canada',
            'CV': 'Cape Verde',
            'KY': 'Cayman Islands',
            'CF': 'Central African Republic',
            'TD': 'Chad',
            'CL': 'Chile',
            'CN': 'China',
            'CX': 'Christmas Island',
            'CC': 'Cocos (Keeling) Islands',
            'CO': 'Colombia',
            'KM': 'Comoros',
            'CG': 'Congo',
            'CD': 'Congo, the Democratic Republic of the',
            'CK': 'Cook Islands',
            'CR': 'Costa Rica',
            'CI': 'Côte d\'Ivoire',
            'HR': 'Croatia',
            'CU': 'Cuba',
            'CW': 'Curaçao',
            'CY': 'Cyprus',
            'CZ': 'Czech Republic',
            'DK': 'Denmark',
            'DJ': 'Djibouti',
            'DM': 'Dominica',
            'DO': 'Dominican Republic',
            'EC': 'Ecuador',
            'EG': 'Egypt',
            'SV': 'El Salvador',
            'GQ': 'Equatorial Guinea',
            'ER': 'Eritrea',
            'EE': 'Estonia',
            'ET': 'Ethiopia',
            'FK': 'Falkland Islands (Malvinas)',
            'FO': 'Faroe Islands',
            'FJ': 'Fiji',
            'FI': 'Finland',
            'FR': 'France',
            'GF': 'French Guiana',
            'PF': 'French Polynesia',
            'TF': 'French Southern Territories',
            'GA': 'Gabon',
            'GM': 'Gambia',
            'GE': 'Georgia',
            'DE': 'Germany',
            'GH': 'Ghana',
            'GI': 'Gibraltar',
            'GR': 'Greece',
            'GL': 'Greenland',
            'GD': 'Grenada',
            'GP': 'Guadeloupe',
            'GU': 'Guam',
            'GT': 'Guatemala',
            'GG': 'Guernsey',
            'GN': 'Guinea',
            'GW': 'Guinea-Bissau',
            'GY': 'Guyana',
            'HT': 'Haiti',
            'HM': 'Heard Island and McDonald Islands',
            'VA': 'Holy See (Vatican City State)',
            'HN': 'Honduras',
            'HK': 'Hong Kong',
            'HU': 'Hungary',
            'IS': 'Iceland',
            'IN': 'India',
            'ID': 'Indonesia',
            'IR': 'Iran, Islamic Republic of',
            'IQ': 'Iraq',
            'IE': 'Ireland',
            'IM': 'Isle of Man',
            'IL': 'Israel',
            'IT': 'Italy',
            'JM': 'Jamaica',
            'JP': 'Japan',
            'JE': 'Jersey',
            'JO': 'Jordan',
            'KZ': 'Kazakhstan',
            'KE': 'Kenya',
            'KI': 'Kiribati',
            'KP': 'Korea, Democratic People\'s Republic of',
            'KR': 'Korea, Republic of',
            'KW': 'Kuwait',
            'KG': 'Kyrgyzstan',
            'LA': 'Lao People\'s Democratic Republic',
            'LV': 'Latvia',
            'LB': 'Lebanon',
            'LS': 'Lesotho',
            'LR': 'Liberia',
            'LY': 'Libya',
            'LI': 'Liechtenstein',
            'LT': 'Lithuania',
            'LU': 'Luxembourg',
            'MO': 'Macao',
            'MK': 'Macedonia, the Former Yugoslav Republic of',
            'MG': 'Madagascar',
            'MW': 'Malawi',
            'MY': 'Malaysia',
            'MV': 'Maldives',
            'ML': 'Mali',
            'MT': 'Malta',
            'MH': 'Marshall Islands',
            'MQ': 'Martinique',
            'MR': 'Mauritania',
            'MU': 'Mauritius',
            'YT': 'Mayotte',
            'MX': 'Mexico',
            'FM': 'Micronesia, Federated States of',
            'MD': 'Moldova, Republic of',
            'MC': 'Monaco',
            'MN': 'Mongolia',
            'ME': 'Montenegro',
            'MS': 'Montserrat',
            'MA': 'Morocco',
            'MZ': 'Mozambique',
            'MM': 'Myanmar',
            'NA': 'Namibia',
            'NR': 'Nauru',
            'NP': 'Nepal',
            'NL': 'Netherlands',
            'NC': 'New Caledonia',
            'NZ': 'New Zealand',
            'NI': 'Nicaragua',
            'NE': 'Niger',
            'NG': 'Nigeria',
            'NU': 'Niue',
            'NF': 'Norfolk Island',
            'MP': 'Northern Mariana Islands',
            'NO': 'Norway',
            'OM': 'Oman',
            'PK': 'Pakistan',
            'PW': 'Palau',
            'PS': 'Palestine, State of',
            'PA': 'Panama',
            'PG': 'Papua New Guinea',
            'PY': 'Paraguay',
            'PE': 'Peru',
            'PH': 'Philippines',
            'PN': 'Pitcairn',
            'PL': 'Poland',
            'PT': 'Portugal',
            'PR': 'Puerto Rico',
            'QA': 'Qatar',
            'RE': 'Réunion',
            'RO': 'Romania',
            'RU': 'Russian Federation',
            'RW': 'Rwanda',
            'BL': 'Saint Barthélemy',
            'SH': 'Saint Helena, Ascension and Tristan da Cunha',
            'KN': 'Saint Kitts and Nevis',
            'LC': 'Saint Lucia',
            'MF': 'Saint Martin (French part)',
            'PM': 'Saint Pierre and Miquelon',
            'VC': 'Saint Vincent and the Grenadines',
            'WS': 'Samoa',
            'SM': 'San Marino',
            'ST': 'Sao Tome and Principe',
            'SA': 'Saudi Arabia',
            'SN': 'Senegal',
            'RS': 'Serbia',
            'SC': 'Seychelles',
            'SL': 'Sierra Leone',
            'SG': 'Singapore',
            'SX': 'Sint Maarten (Dutch part)',
            'SK': 'Slovakia',
            'SI': 'Slovenia',
            'SB': 'Solomon Islands',
            'SO': 'Somalia',
            'ZA': 'South Africa',
            'GS': 'South Georgia and the South Sandwich Islands',
            'SS': 'South Sudan',
            'ES': 'Spain',
            'LK': 'Sri Lanka',
            'SD': 'Sudan',
            'SR': 'Suriname',
            'SJ': 'Svalbard and Jan Mayen',
            'SZ': 'Swaziland',
            'SE': 'Sweden',
            'CH': 'Switzerland',
            'SY': 'Syrian Arab Republic',
            'TW': 'Taiwan, Province of China',
            'TJ': 'Tajikistan',
            'TZ': 'Tanzania, United Republic of',
            'TH': 'Thailand',
            'TL': 'Timor-Leste',
            'TG': 'Togo',
            'TK': 'Tokelau',
            'TO': 'Tonga',
            'TT': 'Trinidad and Tobago',
            'TN': 'Tunisia',
            'TR': 'Turkey',
            'TM': 'Turkmenistan',
            'TC': 'Turks and Caicos Islands',
            'TV': 'Tuvalu',
            'UG': 'Uganda',
            'UA': 'Ukraine',
            'AE': 'United Arab Emirates',
            'GB': 'United Kingdom',
            'US': 'United States',
            'UM': 'United States Minor Outlying Islands',
            'UY': 'Uruguay',
            'UZ': 'Uzbekistan',
            'VU': 'Vanuatu',
            'VE': 'Venezuela, Bolivarian Republic of',
            'VN': 'Viet Nam',
            'VG': 'Virgin Islands, British',
            'VI': 'Virgin Islands, U.S.',
            'WF': 'Wallis and Futuna',
            'EH': 'Western Sahara',
            'YE': 'Yemen',
            'ZM': 'Zambia',
            'ZW': 'Zimbabwe'
        };


        var defaultPlaceholder = {
            text: 'Select a country' // Default placeholder text
        };
        

        var countryNames = options && options.countries ? options.countries : defaultCountryNames;
        var placeholder = options && options.placeholder ? options.placeholder : defaultPlaceholder;


        
        function callbackFunction(country) {
            if (options && options.onSelect) {
                options.onSelect(country, this);
            }
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

            var spanIcon = $('<span id="arr-icn"><svg width="15" height="10" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2L10 10L2 2" stroke="#808080" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>')
                .appendTo(button);

            var spanElement = $('<span></span>')
                .addClass('flag-icon flag-icon-' + (selectedCountry ? selectedCountry.toLowerCase() : 'default'))
                .css('margin-right', '5px')
                .appendTo(button);

            var buttonText = $('<span class="ctytxt"></span>').appendTo(button);

            updateButtonText(selectedCountry);

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
                    flagstrapDiv.removeClass('selectflag3-active');
                    flagstrapDiv.find('#flagButton').removeClass('flagButton-active');
                });
            });


            function updateButtonText(country) {
                if (country) {
                    buttonText.text(countryNames[country] + " (" + country + ")");
                    spanElement.attr('class', 'flag-icon flag-icon-' + country.toLowerCase()).css('margin-right', '5px');
                } else {
                    buttonText.text(placeholder.text); // Update the button text with the placeholder
                    spanElement.attr('class', '').css('margin-right', '0px');
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
