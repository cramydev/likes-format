function convert() {
  const maxValue = 999999999
  document.getElementById('errorMessage').innerHTML = ""

  if (parseInt(document.getElementById('quantity').value || 0) > maxValue) {
    // Esta validación se hace por porpósitos del ejemplo - This validation is set for the example porpouse
    document.getElementById('errorMessage').innerHTML = `Valor máximo permitido / Allowed max value: ${maxValue}`

    document.getElementById('realQuantity').innerHTML = ""
    document.getElementById('formatQuantity').innerHTML = ""
  } else {
    let quantity = parseInt(document.getElementById('quantity').value || 0) // Obtenemos el valor del input - Get the input value 
    let stringQuantity = quantity.toString() // Convertimos el valor numérico a texto - Convert the numeric value to string
    let format = ""

    if (stringQuantity.length <= 3) {
      /**
       * Rango / Range: 0 - 999
       */
      format = stringQuantity;
    } else if (stringQuantity.length == 4) {
      /**
       * Rango / Range: 1,000 - 9,999
       * Valor de ejemplo / Example value: 1200
       * Resultado / Result: 1.2K
       */

      let piece1 = stringQuantity[0]; // 1
      let piece2 = stringQuantity[1]; // 2
      
      format = parseInt(piece2) > 0 ? `${piece1}.${piece2}K` : `${piece1}K`;
    } else if (stringQuantity.length == 5) {
      /**
       * Rango / Range: 10,000 - 99,999
       * Valor de ejemplo / Example value: 12500
       * Resultado / Result: 12.5K
       */

      let piece1 = stringQuantity[0]; // 1
      let piece2 = stringQuantity[1]; // 2
      let piece3 = stringQuantity[2]; // 5
      
      format =
        parseInt(piece3) > 0
          ? `${piece1}${piece2}.${piece3}K`
          : `${piece1}${piece2}K`;
    } else if (stringQuantity.length == 6) {
      /**
       * Rango / Range: 100,000 - 999,999
       * Valor de ejemplo / Example value: 128700
       * Resultado / Result: 128.7K
       */

      let piece1 = stringQuantity[0]; // 1
      let piece2 = stringQuantity[1]; // 2
      let piece3 = stringQuantity[2]; // 8
      let piece4 = stringQuantity[3]; // 7
      
      format =
        parseInt(piece4) > 0
          ? `${piece1}${piece2}${piece3}.${piece4}K`
          : `${piece1}${piece2}${piece3}K`;
    } else if (stringQuantity.length == 7) {
      /**
       * Rango / Range: 1,000,000 - 9,999,999
       * Valor de ejemplo / Example value: 3059300
       * Resultado / Result: 3M
       */

      let piece1 = stringQuantity[0]; // 3
      let piece2 = stringQuantity[1]; // 0
      
      format = parseInt(piece2) > 0 ? `${piece1}.${piece2}M` : `${piece1}M`;
    } else if (stringQuantity.length == 8) {
      /**
       * Rango / Range: 10,000,000 - 99,999,999
       * Valor de ejemplo / Example value: 22300500
       * Resultado / Result: 22.3M
       */

      let piece1 = stringQuantity[0]; // 2
      let piece2 = stringQuantity[1]; // 2
      let piece3 = stringQuantity[2]; // 3
      
      format =
        parseInt(piece3) > 0
          ? `${piece1}${piece2}.${piece3}M`
          : `${piece1}${piece2}M`;
    } else if (stringQuantity.length == 9) {
      /**
       * Rango / Range: 100,000,000 - 999,999,999
       * Valor de ejemplo / Example value: 212300500
       * Resultado / Result: 212.3M
       */

      let piece1 = stringQuantity[0]; // 2
      let piece2 = stringQuantity[1]; // 1
      let piece3 = stringQuantity[2]; // 2
      let piece4 = stringQuantity[3]; // 3
      
      format =
        parseInt(piece4) > 0
          ? `${piece1}${piece2}${piece3}.${piece4}M`
          : `${piece1}${piece2}${piece3}M`;
    }

    /**
     * Acá convertimos el valor numérico a un formato númerico. Por ejemplo: 1000 -> 1,000
     * Here we convert the numeric value into a numeric format. For example: 1000 -> 1,000
     */
    let fullNumberFormat = quantity.toLocaleString('en-US')

    document.getElementById('realQuantity').innerHTML = `Formato numérico / Numeric format: ${fullNumberFormat}`
    document.getElementById('formatQuantity').innerHTML = `Formato corto / Short format: ${format}`
  }
}
