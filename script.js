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
function cripto() {
  let text = document.getElementById("text").value.toLowerCase();
  let 

/* 
<section id="section1">
      <textarea id="text" cols="40" rows="50" placeholder="Digite seu texto . . . "></textarea>
      <p id="info_text">Apenas letras minúsculas e sem acento.</p>
      <div id="buttons">
         <button type="button" id="button1Cripto">Criptografar</button>
         <button type="button" id="button2Descripto">Descriptografar</button>
      </div>
    </section>
    <section id="section2">
      <div id="text_result"></div>
      <h4 id="info_result_none">NENHUMA MENSAGEM ENCONTRADA</h4>
      <p id="info_result_type">Digite um texto que você deseja criptografar ou descriptografar.</p>
    </section>   
*/
