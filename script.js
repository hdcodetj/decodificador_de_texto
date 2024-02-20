function cripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
  document.getElementById('result_text').innerHTML = result;  
  document.getElementById('copiar').style.display = 'block';

};


function descripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
  document.getElementById('result_text').innerHTML = result;
  document.getElementById('copiar').display = 'block';
}

function copiartexto() {
    const textcopiado = document.getElementById('result_text').value;
    textcopiado.select();
    document.execCommand('copiar');
}
