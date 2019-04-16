"use strict";
(function () {
    var form = document.getElementById('domain-search-form')
    var searchResult = document.getElementsByClassName('js-domain-wrap')[0]
    var seachedDomain = searchResult.getElementsByClassName('js-domain')[0]
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        searchResult.style.display = 'none'
        if (form.domain.value && form.domain.value.length) {
            seachedDomain.textContent = form.domain.value
            searchResult.style.display = 'block'
        }
    })
})()