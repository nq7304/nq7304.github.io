function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1DuGbygg-r8r8HD2_eIz1TjCB7q2U-pJQGZzC8WEsIqE/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)