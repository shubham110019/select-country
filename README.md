# selectflag3

html code
```
<div id="selectflag"></div>
```

html default country add
```
<div id="selectflag" data-selected-country="IN"></div>
```

jquery code
```
 $(document).ready(function () {
            $('#selectflag').selectflag3({
                countries: {
                    'US': 'USA',
                    'CA': 'Canada',
                    'GB': 'UK',
                    'AU': 'Australia',
                    'IN': 'India'
                },
                onSelect: function (value, element) {
                    console.log(value);
                }
            });
        });

```




jquery placeholder add 
```
 $(document).ready(function () {
            $('#selectflag').selectflag3({
                countries: {
                    'US': 'USA',
                    'CA': 'Canada',
                    'GB': 'UK',
                    'AU': 'Australia',
                    'IN': 'India'
                },
                placeholder: {
                    text: "Country of origin"
                },
                onSelect: function (value, element) {
                    console.log(value);
                }
            });
        });

```