function cripto() {
    const text = document.getElementById('texto').value;
    const result = text.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
    document.getElementById('resultado').innerText = result;
  }

  function descripto() {
    const text = document.getElementById('texto').value;
    const result = text.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
    document.getElementById('resultado').innerText = result;
  }