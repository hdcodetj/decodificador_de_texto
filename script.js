function cripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
  document.getElementById('text').innerText = result;  
  document.getElementById('copiar').style.display = 'block';

};


function descripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
  document.getElementById('text').innerText = result;
  document.getElementById('copiar').style.display = 'block';
}

function copiartexto() {
    const textcopiado = document.getElementById('text').value;
    textcopiado.select();
    document.execCommand('copy');
}
