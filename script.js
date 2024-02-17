function cripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
  document.getElementById('text').innerText = result;
};


function descripto() {
  const text = document.getElementById('texto').value;
  const result = text.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
  document.getElementById('text').innerText = result;

}


/* 
function descripto() {
    const text = document.getElementById('texto').value;
    const result = text.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
    document.getElementById('resultado').innerText = result;
  }

    <section id="section1">
      <div class="container">
          <textarea id="texto" placeholder="Escreva seu texto . . . " style="resize: none"></textarea>
          <p id="info_text">Apenas letras minúsculas e sem acento.</p>
          <div id="buttons">
            <button onclick="cripto()">Criptografar</button>
            <button onclick="descripto()">Descriptografar</button>
          </div>
      </div>
      <div id="resultado">
          <textarea id="text" cols="40" rows="50" placeholder="Digite seu texto . . . " style="resize: none"></textarea>
          <div id="text_result"></div>
          <h4 id="info_result_none">NENHUMA MENSAGEM ENCONTRADA</h4>
          <p id="info_result_type">Digite um texto que você deseja criptografar ou descriptografar.</p>
      </div>
    </section>   
  </main>
  <footer>
    <p id="footer">Desenvolvido por Hélio Dias Carvalho</p>
  </footer>  */
